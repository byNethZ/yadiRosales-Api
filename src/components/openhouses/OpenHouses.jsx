import React, { useEffect, useState } from "react";
import request from "./../../request";
import "./OpenHouses.css";
import "../../shared/Card.css";
import "../../shared/Shared.css";
import Card from "../../shared/Card";
import Galeria from "../../shared/Galeria";
import "./../../shared/Filter.css";

function OpenHouses() {
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
          setData(info.data);
          setResult(info.data);
          getCities(info.data);
          //console.log(info.data);
          setCharging(false);
        });
    }
    fetchData();
  }, []);

  const getCities = (array) => {
    array.forEach((prop) => {
      if (!citiesCont.includes(prop.ADD5)) {
        citiesCont.push(prop.ADD5);
      }
    });
    setCitiesArray(citiesCont);
  };

  const handleChangeCity = (e) => {
    setSearch(e.target.value);
    searchCity(e.target.value);
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
      <div className="filters">
        <div className="filter">
          <select id="city" onChange={handleChangeCity}>
            <option value="" selected disabled hidden>
              City
            </option>
            {citiesArray.map((city, index) => (
              <option value={city}>{city}</option>
            ))}
          </select>
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
