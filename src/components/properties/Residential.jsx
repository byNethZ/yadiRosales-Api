import React, { useEffect, useState } from "react";
import requests from "../../request";
import "./../openhouses/OpenHouses.css";
import "../../shared/Card.css";
import "../../shared/Shared.css";
import Card from "../../shared/Card";
import { Link, Route } from "react-router-dom";
import ModalComponent from "../../shared/Modal";
import "./../../shared/Filter.css";
import Dropdown from "../../shared/Dropdown";
import Content from "./Content";

function Residential() {
  const items = [
    {
      slug: "/",
      anchor: "Residential",
    },
    {
      slug: "/multifamily",
      anchor: "Multifamily",
    },
    {
      slug: "/rental",
      anchor: "Rental",
    },
    {
      slug: "/lots",
      anchor: "Lots & Lands",
    },
  ];

  const [error, setError] = useState(false);
  const [charging, setCharging] = useState(true);
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]); //static tableusers
  const [search, setSearch] = useState("");
  const [valueInputMin, setValueInputMin] = useState("");
  const [valueInputMax, setValueInputMax] = useState("");
  const [citiesArray, setCitiesArray] = useState([]);

  const citySelect = document.getElementById("city");
  const bedsSelect = document.getElementById("beds");
  const bathsSelect = document.getElementById("baths");
  const priceMinSelect = document.getElementById("minPrice");
  const priceMaxSelect = document.getElementById("maxPrice");
  let cityValue = "";
  let bedsValue = "";
  let bathsValue = "";
  let priceMinValue = "";
  let priceMaxValue = "";
  let citiesCont = [];
  // let valueInputMin = '';
  // let valueInputMax = '';

  useEffect(() => {
    async function fetchData() {
      const req = await fetch(requests.fetchAProperties)
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
      var exists = !hash[current.LIST_105];
      hash[current.LIST_105] = true;
      return exists;
    });

    // console.log(dataInfo);
    console.log(array);

    setData(array);
    setResult(array);
    getCities(array);
    setCharging(false);
  };

  const getCities = (array) => {
    array.forEach((prop) => {
      if (!citiesCont.includes(prop.LIST_39)) {
        citiesCont.push(prop.LIST_39);
      }
    });
    setCitiesArray(citiesCont);
  };

  const handleChange = (e) => {
    verifyPrice();
    cityValue = citySelect.value;
    bedsValue = bedsSelect.value ? bedsSelect.value : 0;
    bathsValue = bathsSelect.value ? bathsSelect.value : 0;
    priceMinValue = priceMinSelect.value ? priceMinSelect.value : 0;
    priceMaxValue = priceMaxSelect.value
      ? priceMaxSelect.value
      : 9999999999999999;
    searchChange(
      cityValue,
      bedsValue,
      bathsValue,
      priceMinValue,
      priceMaxValue
    );
  };

  const searchChange = (city, beds, baths, priceMinValue, priceMaxValue) => {
    var filteredData = result
      .filter((element) => {
        return element.LIST_39.toString()
          .toLowerCase()
          .includes(city.toLowerCase());
      })
      .filter((element) => {
        return parseInt(element.LIST_66) >= parseInt(beds);
        //console.log(parseInt(element.LIST_66));
      })
      .filter((element) => {
        var bathsNumber = Math.round(element.LIST_67);
        //return bathsNumber.toString().toLowerCase().includes(baths.toLowerCase());
        return bathsNumber >= parseInt(baths);
      })
      .filter((element) => {
        return parseInt(element.LIST_22) >= parseInt(priceMinValue);
      })
      .filter((element) => {
        return parseInt(element.LIST_22) <= parseInt(priceMaxValue);
      });
    setData(filteredData);
  };

  const resetData = () => {
    setData(result);
  };

  const verifyPrice = () => {
    if (parseInt(priceMinSelect.value) > parseInt(priceMaxSelect.value)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="container">
      <h2>Residential</h2>
      {error ? (
        <p>The Min Price field cannot be greater than the Max Price field </p>
      ) : (
        ""
      )}
      <div className="filter-container">
        <div className="filters">
          <div className="filter">
            <Dropdown className="mt-2" dropdownTitle="Types" items={items} />
          </div>
          <div className="filter">
            <select id="city" ref={citySelect} onChange={handleChange}>
              <option value="" selected>
                City
              </option>
              {citiesArray.map((city, index) => (
                <option value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div className="filter">
            <select id="beds" ref={bedsSelect} onChange={handleChange}>
              <option value="" selected>
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
            <select id="baths" ref={bathsSelect} onChange={handleChange}>
              <option value="" selected>
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
            <select id="minPrice" onChange={handleChange}>
              <option value="" selected>
                Min Price
              </option>
              <option value="500">$ 500.00 </option>
              <option value="1000">$1 K</option>
              <option value="2000">$ 2 K</option>
              <option value="5000">$ 5 K</option>
              <option value="10000">$ 10 K</option>
              <option value="20000">$ 20 K</option>
              <option value="50000">$ 50 K</option>
              <option value="100000">$ 100 K</option>
              <option value="200000">$ 200 K</option>
              <option value="300000">$ 300 K</option>
              <option value="500000">$ 500 K</option>
              <option value="1000000">$ 1 M</option>
            </select>
          </div>
          <div className={`filter ${error ? "red-alert" : ""} `}>
            <select id="maxPrice" onChange={handleChange}>
              <option value="" selected>
                Max Price
              </option>
              <option value="500">$ 500.00 </option>
              <option value="1000">$1 K</option>
              <option value="2000">$ 2 K</option>
              <option value="5000">$ 5 K</option>
              <option value="10000">$ 10 K</option>
              <option value="20000">$ 20 K</option>
              <option value="50000">$ 50 K</option>
              <option value="100000">$ 100 K</option>
              <option value="200000">$ 200 K</option>
              <option value="300000">$ 300 K</option>
              <option value="500000">$ 500 K</option>
              <option value="1000000">$ 1 M</option>
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
        <h3
          className={`${
            data.length === 0 && !charging ? "visible" : "invisible"
          }`}
        >
          No results
        </h3>
        {data.map((property) => (
          <div key={property.LIST_105} className="Card">
            <Card id={property.LIST_105} price={property.LIST_22} />
            <p>
              {property.LIST_41} | {property.LIST_39}
            </p>
            <div className="description">
              <div>
                <p>{property.LIST_66}</p>
                <img src="img/bed.png" srcSet="img/bed-solid.svg" alt="beds" />
              </div>
              <div>
                <p>{Math.round(property.LIST_67)}</p>
                <img
                  src="img/bath.png"
                  srcSet="img/bath-solid.svg"
                  alt="baths"
                />
              </div>
              <p className="desc-level">
                {property.GF20141105190204376686000000}
              </p>
            </div>
            <ModalComponent property={property} type="residencial" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Residential;

/* 
      <nav className="nav-content">
        <Link className="buttons" to="/multifamily">
          Multifamily
        </Link>
        <Link className="buttons" to="/lots">
          Lands
        </Link>
        <Link className="buttons" to="/rental">
          Rental
        </Link>
      </nav>


      {`${property.LIST_31}, ${property.LIST_34} ${property.LIST_37} ${property.LIST_35}`}

                <div className="container-button-filter">
            <button className="buttons-filter" onClick={handleChange}>
              Search
            </button>
          </div>

          <ModalComponent property={property} />
*/
