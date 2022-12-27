import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import requests from "../request";
import logo from "./../img/logo_blanco_50.png";

import "./search.css";

type TypeProperty = 'A' | 'B' | 'C' | 'D';

interface Props {
  width: number;
  isHome: boolean;
}

interface DataColumns {
  city: string[];
  county: string[];
  elementary_school: string[];
  high_school: string[];
  middle_school: string[];
  state: string[];
  zipcode: string[];
  subtype: string[];
  list_number: string[];
  address: string[];
}

type Item = {
  id: number;
  name: string;
};

const Search = ({ width, isHome }: Props) => {
  const [dataColumns, setDataColumns] = useState<DataColumns>();
  const [valueSelect, setValueSelect] = useState<keyof DataColumns>();
  const [typeProperty, setTypeProperty] = useState<TypeProperty>('A')
  const [items, setItems] = useState<Item[]>([]);
  const [query, setQuery] = useState({
    feature: "",
    value: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${requests.fetchDataColumns}`);
      const data = await response.json();
      setDataColumns(data.data);
    };

    fetchData().catch(console.error);
  }, []);

  const handleOnSearch = (string: string, results: Item[]) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    let search = string.charAt(0).toUpperCase() + string.slice(1);
    if(!valueSelect){
      if(isNaN(+search)){
        setValueSelect('address')
        setQuery({
          feature: 'address',
          value: search,
        });
      }else {
        setValueSelect('list_number')
        setQuery({
          feature: 'list_number',
          value: search,
        });
      }

    }

    else if (valueSelect)
      setQuery({
        feature: valueSelect,
        value: search,
      });

  };

  const handleOnHover = (result: Item) => {
    // the item hovered
  };

  const handleOnSelect = (item: Item) => {
    // the item selected
    if (valueSelect) {
      let newQuery = {
        feature: valueSelect,
        value: item.name,
      };
      setQuery(newQuery);
    }
  };

  const handleOnFocus = () => {
  };

  const formatResult = (item: any) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  const handleSearchButton = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    if (valueSelect === 'list_number') return navigate(`/property/${query.value}`);

    if (dataColumns && valueSelect) return navigate(`/results/${typeProperty}/${query.feature}/${query.value}`);
  
  };

  useEffect(() => {
    setItems([]);

    if (dataColumns && valueSelect) {
      dataColumns[valueSelect].forEach((key, value) => {
        let newItem: Item = {
          id: value + 1,
          name: key,
        };
        setItems((result) => [...result, newItem]);

      });
    }
  }, [valueSelect]);

  const styles = {
    borderRadius: width >= 768 ? "0px .5rem .5rem 0" : ".5rem",
    height: "3rem",
    border: "none",
  };

  return (
    <div
      className={`bar-search ${isHome ? "position-home" : "position-other"}`}
    >
      <div className="logo-container-header">
        <img src={logo} alt="Logotipo" />
      </div>
      <form className="form-container">
        <div className="form-search">
          <select
            defaultValue={"DEFAULT"}
            className="select-search"
            name="field"
            id=""
            onChange={(evt) =>
              setValueSelect(evt.target.value as keyof DataColumns)
            }
          >
            <option value="DEFAULT" disabled hidden>
              Search By
            </option>
            <option value="city">City</option>
            <option value="county">County</option>
            <option value="state">State</option>
            <option value="elementary_school">Elementary School</option>
            <option value="middle_school">Middle School</option>
            <option value="high_school">High School</option>
            <option value="zipcode">Zipcode</option>
            <option value="subtype">Type</option>
          </select>
          <div
            className={`input-search`}
          >
            <ReactSearchAutocomplete
              items={items}
              onSearch={(string, result) => handleOnSearch(string, result)}
              onHover={(result) => handleOnHover(result)}
              onSelect={(item) => handleOnSelect(item)}
              onFocus={() => handleOnFocus()}
              autoFocus
              styling={styles}
              placeholder="Select from Search By Button"
              formatResult={(item: any) => formatResult(item)}
            />
          </div>
          <select onChange={(evt) => setTypeProperty(evt.target.value as TypeProperty)} className="select-search select-type" name="" id="">
            <option value="A">Residential</option>
            <option value="B">Multifamily</option>
            <option value="C">Land</option>
            <option value="D">Rental</option>
          </select>
        </div>
        <button onClick={(evt) => handleSearchButton(evt)} type="submit">
          Find Your Home
        </button>
      </form>
      <div className="second-menu-container">
        <ul className="second-menu-content">
          <li onClick={ () => navigate(`/coldwell-banker`)}>Our listings</li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
