import React, { useEffect, useState } from "react";
import request from "./../../request";
import "./OpenHouses.css";
import "../../shared/Card.css";
import "../../shared/Shared.css";
import Card from "../../shared/Card";
import Galeria from "../../shared/Galeria";
import "./../../shared/Filter.css";
import Dropdown from "../../shared/Dropdown";

function OpenHouses() {
  const items = [
    {
      slug: "/residential",
      anchor: "Residential"
    },
    {
      slug: "/multifamily",
      anchor: "Multifamily"
    },
    {
      slug: "/rental",
      anchor: "Rental"
    },
    {
      slug: "/lots",
      anchor: "Lots & Lands"
    },
    {
      slug: "/",
      anchor: "Open Houses"
    }
  ];
  const [charging, setCharging] = useState(true);
  const [data, setData] = useState([]); //dinamic users
  const [result, setResult] = useState([]); //static tableusers
  const [search, setSearch] = useState("");
  const [citiesArray, setCitiesArray] = useState([]);

  let citiesCont = [];

  const [city, setCity] = useState(""); //search

  useEffect(() => {
    async function fetchData() {
      const req = await fetch(request.fetchOpenHouses)
        .then((response) => response.json())
        .then((info) => {
          fixData(info.data);
        });
    }
    fetchData();
  }, []);

  const fixData = (dataInfo) => {
    let array = dataInfo;
    var hash = {};
    array = array.filter(function (current) {
      var exists = !hash[current.LIST105];
      hash[current.LIST105] = true;
      return exists;
    });

    //console.log(dataInfo);
    //console.log(array);

    setData(array);
    setResult(array);
    getCities(array);
    setCharging(false);
  };

  //get Cities from dataInfo
  const getCities = (array) => {
    array.forEach((prop) => {
      if (!citiesCont.includes(prop.ADD5)) {
        citiesCont.push(prop.ADD5);
      }
    });
    setCitiesArray(citiesCont);
  };

  const handleChangeCity = (e) => {
    //setSearch(e.target.value);
    searchCity(e.target.value);
    //console.log(e.target.value);
  };

  const searchCity = (query) => {
    var filteredCity = result.filter((element) => {
      return element.ADD5.toString()
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setData(filteredCity);
  };

  return (
    <div className="container">
      <h2>Open Houses</h2>
      <div className="filter-container">
      <Dropdown className="mt-2" dropdownTitle="Types" items={items} />
      <div className="filters">
        <div className="filter">
          <select id="city" onChange={handleChangeCity}>
            <option value="" selected>
              City
            </option>
            {citiesArray.map((city, index) => (
              <option value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>
      </div>
      <div className="OpenHouses">
        <img
          className={`${charging === true ? "visible" : "invisible"} charging`}
          src="img/charging.gif"
          alt=""
        />
        {data.map((property) => (
          <div key={property.LIST105} className="Card">
            <Card id={property.LIST105} />
            <h3>{property.ADD0}</h3>
            <h3>{property.ADD5}</h3>
            <p>{property.ADD10}</p>
            <h4>{property.OPEN_HOUSE_COMMENT}</h4>
            <h3>{property.OFC3}</h3>
            <h3>(423) 710 6046</h3>
            <p>(423) 894 6762</p>
            <Galeria property={property} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OpenHouses;

/* 
<Card key={property.LIST105} street={property.ADD0}/>
<div key={property.LIST105}>
  <h1>{property.ADD0}</h1>
</div>
*/
