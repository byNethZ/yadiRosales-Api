import React, { useEffect, useState } from "react";
import requests from "../../request";
import "./../openhouses/OpenHouses.css";
import "../../shared/Card.css";
import "../../shared/Shared.css";
import Card from "../../shared/Card";
import { Link } from "react-router-dom";
import ModalComponent from "../../shared/Modal";
import "./../../shared/Filter.css";

function Rental() {
  const [charging, setCharging] = useState(true);
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]); //static tableusers
  const [search, setSearch] = useState("");
  const [valueInputMin, setValueInputMin] = useState("");
  const [valueInputMax, setValueInputMax] = useState("");
  const [citiesArray, setCitiesArray] = useState([])

  const citySelect = document.getElementById('city');
  const bedsSelect = document.getElementById('beds');
  const bathsSelect = document.getElementById('baths');
  const priceMaxSelect = document.getElementById('maxPrice');
  let cityValue = "";
  let bedsValue = "";
  let bathsValue = "";
  let priceMaxValue = "";
  let citiesCont = [];

  useEffect(() => {
    async function fetchData() {
      const req = await fetch(requests.fetchDProperties)
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
    bedsValue = bedsSelect.value;
    bathsValue = bathsSelect.value;
    priceMaxValue = priceMaxSelect.value;
    searchChange(cityValue, bedsValue, bathsValue, priceMaxValue);
    }

  const searchChange = (city, beds, baths, priceMaxValue) => {
    var filteredData = result
      .filter((element) => {
        return element.LIST_39.toString().toLowerCase().includes(city.toLowerCase());
      })
      .filter((element) => {
        return element.LIST_66.toString().toLowerCase().includes(beds.toLowerCase());
      })
      .filter((element) => {
        var bathsNumber = Math.floor(element.LIST_67);
        return bathsNumber.toString().toLowerCase().includes(baths.toLowerCase());
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
      <h2>Rental</h2>
      <nav className='nav-content'>
          <Link className="buttons mg-3" to="/residential">
            Residential
          </Link>
          <Link className="buttons mg-3" to="/multifamily">
            Multifamily
          </Link>
          <Link className="buttons mg-3" to="/lots">
            Lands
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
          <h3>Beds</h3>
          <select id="beds" ref={bedsSelect}>
            <option value="" selected disabled hidden>
              Beds
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="filter">
          <h3>Baths</h3>
          <select id="baths" ref={bathsSelect}>
            <option value="" selected disabled hidden>
              Baths
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="filter">
          <h3>Max Price</h3>
          <input type="range" min='0' max='5000' name="maxPrice" id="maxPrice" onChange={showRangeMax}/>
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
            <h3>Street</h3>
            <p>{`${property.LIST_31}, ${property.LIST_34} ${property.LIST_37} ${property.LIST_35}`}</p>
            <p>{property.LIST_41}</p>
            <h3>City</h3>
            <p>{property.LIST_39}</p>
            <h4>{`${property.LIST_40} ${property.LIST_43}`}</h4>
            <h3>{property.LIST_22}</h3>
            <h4>{property.GF20160124215512048001000000}</h4>
            <ModalComponent property={property} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rental;
