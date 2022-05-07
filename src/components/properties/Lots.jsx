import React, { useEffect, useState } from "react";
import requests from "../../request";
import "./../openhouses/OpenHouses.css";
import "../../shared/Card.css";
import "../../shared/Shared.css";
import Card from "../../shared/Card";
import { Link } from "react-router-dom";
import ModalComponent from "../../shared/Modal";

function Lots() {
  const [charging, setCharging] = useState(true);
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]); //static tableusers
  const [search, setSearch] = useState("");
  const [valueInputMin, setValueInputMin] = useState("");
  const [valueInputMax, setValueInputMax] = useState("");
  const [citiesArray, setCitiesArray] = useState([]);

  const citySelect = document.getElementById('city');
  const priceMaxSelect = document.getElementById('maxPrice');
  let cityValue = "";
  let priceMaxValue = "";
  let citiesCont = [];
  
  useEffect(() => {
    async function fetchData() {
      const req = await fetch(requests.fetchCProperties)
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
      if(!citiesCont.includes(prop.LIST_39)){
        citiesCont.push(prop.LIST_39);
      }
    })
    setCitiesArray(citiesCont)
  }

  const handleChange = (e) => {
    cityValue = citySelect.value;
    priceMaxValue = priceMaxSelect.value;
    searchChange(cityValue, priceMaxValue);
    }

  const searchChange = (city, priceMaxValue) => {
    var filteredData = result
      .filter((element) => {
        return element.LIST_39.toString().toLowerCase().includes(city.toLowerCase());
      })
      .filter((element) => {
        return parseInt(element.LIST_22) < parseInt(priceMaxValue);
      });
    setData(filteredData);
  };

  const resetData = () => {
    setData(result);
  };
  
  const showRangeMax = (evt) => {
    setValueInputMax(evt.target.value)
  }

  return (
    <div className="container">
      <h2>Lots and Lands</h2>
      <nav className='nav-content'>
          <Link className="buttons mg-3" to="/residential">
            Residential
          </Link>
          <Link className="buttons mg-3" to="/multifamily">
            Multifamily
          </Link>
          <Link className="buttons mg-3" to="/rental">
            Rental
          </Link>
        </nav>
        <div className="filters">
        <div className="filter">
          <h3>Search for homes</h3>
          <select id="city" ref={citySelect}>
            <option value="" selected disabled hidden>
              City
            </option>
            {citiesArray.map((city, index) => (
              <option value={city} >{city}</option>
            ))}
          </select>
        </div>
        <div className="filter">
          <h3>Max Price</h3>
          <input type="range" min='0' max='700000' name="maxPrice" id="maxPrice" onChange={showRangeMax}/>
          <h5>$ {valueInputMax}.00</h5>
        </div>
        <div>
          <button className="buttons buttons-filter" onClick={handleChange}>Search</button>
        </div>
        <div>
          <button className="buttons buttons-filter" onClick={resetData}>Reset</button>
        </div>
      </div>
      <div className="OpenHouses">
        <img
          className={`${charging === true ? "visible" : "invisible"} charging`}
          src="img/charging.gif"
          alt=""
        />
        <h3 className={`${data.length === 0 && !charging ? "visible" : "invisible"}`} >No hay resultados</h3>
        {data.map((property) => (
          <div key={property.LIST_3} className="Card">
            <Card id={property.LIST_3} />
            <p>{property.listing_member_address}</p>
            <h3>{property.FEAT20151201165322685242000000}</h3>
            <h4>{property.LIST_39}</h4>
            <h4>{property.OPEN_HOUSE_COMMENT}</h4>
            <h3>{property.listing_member_phone}</h3>
            <div className="admin">
              <h4>{property.GF20141205150705700031000000}</h4>
              <p>{property.LIST_22}</p>
            </div>
            <ModalComponent property={property} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lots;
