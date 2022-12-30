import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { PropertyProps } from "../../interfaces/Propety.interface";
import requests from "../../request";
import Back from "../../shared/Back/Back";
import Card from "../../shared/Card";
import Filter from "../../shared/Filters/Filters";
import { TitleHash } from "../../utils/TitleHash";
import "./catalogue.css";

const Catalogue = () => {
  const location = useLocation();
  const { gallery, type, feature, value } = useParams();
  const [currentPath, setCurrentPath] = useState<string>();

  const [URLFetch, setURLFetch] = useState<string>('')

  const [nextPage, setNextPage] = useState<string | null>(null);
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>([]);
  const [totalProperties, setTotalProperties] = useState<number>(0);
  
  const [minutesAgo, setMinutesAgo] = useState<number>(0);
  const [title, setTitle] = useState<string>();
  
  const [resetFiltersData, setResetFiltersData] = useState<boolean>(false);

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location]);
  
  useEffect(() => {
    let minutes = new Date().getMinutes();
    setURL();

    setProperties([])

    if(URLFetch) fetchData(URLFetch).catch(console.error);
    //console.log(URLFetch)
    setMinutesAgo(minutes);
    setTitleCatalog();

  }, [gallery, feature, value, currentPath, URLFetch]);

  const setTitleCatalog = () => {
    if (feature !== undefined) {
      let featureFormatted = feature.replace(/^_*(.)|_+(.)/g, (s, c, d) =>
        c ? c.toUpperCase() : " " + d.toUpperCase()
      );

      gallery === "results"
        ? setTitle(`${featureFormatted}/${value}`)
        : setTitle(
            `Properties/${TitleHash[feature as keyof typeof TitleHash]}`
          );
    } else {
      //console.log('title undefined');
      setTitle('Coldwell Banker Pryor Listings')
    }
    //console.log(title, feature);
  }

  const setURL = () => {
    if (currentPath === "/coldwell-banker") return setURLFetch(`${requests.coldwellBanker}`);

    if (gallery === "results") return setURLFetch(`${requests.fetchSearch}${type}?feature=${feature}&query=${value}`);

    return setURLFetch(`${requests.fetchProperties}${feature}`)
  };

  const handleClick = () => {
    
    if (nextPage) fetchData(nextPage).catch(console.error);

  };

  const fetchData = async (url: string) => {
    let nextUrl: string;

    const response = await fetch(url);

    const data = await response.json();

    nextUrl = data.data.next_page_url;
    properties.length > 0
      ? setProperties((result) => [...result, ...data.data.data])
      : setProperties(data.data.data);

    nextUrl ? setNextPage(nextUrl) : setNextPage(null);
    setTotalProperties(data.data.total);
  };

  const resetFilter = () => {
    setFilteredProperties(properties);
    //setURLQuery('?')
    setResetFiltersData(true);
  };

  return (
    <div className="catalogue-container">
      <div className="catalogue-title">
        <Back />
        <h2>{title}</h2>
      </div>
      <Filter
        onFilterData={(data) => {
          setFilteredProperties(data);
          //setURLQuery(data)
          setResetFiltersData(false);
        }}
        properties={properties}
        isReset={resetFiltersData}
      />
      <button className="button-reset" onClick={() => resetFilter()}>
        Reset
      </button>
      <div className="catalogue-info">
        <p className="total-properties">
          Showing {filteredProperties.length} of {totalProperties}
        </p>
        <p className="minutes-ago">Updated {minutesAgo} minutes ago</p>
      </div>
      <div className="catalogue-card-container">
        {filteredProperties.map((property: PropertyProps) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
      {nextPage && (
        <button onClick={handleClick} className="button-section">
          See more
        </button>
      )}
      {filteredProperties.length === 0 && <p>No results</p>}
    </div>
  );
};

export default Catalogue;
