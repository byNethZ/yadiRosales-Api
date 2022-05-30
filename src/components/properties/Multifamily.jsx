import React, { useEffect, useState } from "react";
import requests from "../../request";
import "./../openhouses/OpenHouses.css";
import "../../shared/Card.css";
import "../../shared/Shared.css";
import Card from "../../shared/Card";
import { Link } from "react-router-dom";
import ModalComponent from "../../shared/Modal";
import "./../../shared/Filter.css";
import Dropdown from "../../shared/Dropdown";

function Multyfamily() {
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
  const priceMinSelect = document.getElementById("minPrice");
  const priceMaxSelect = document.getElementById("maxPrice");
  const unitSelect = document.getElementById("unit");
  let unitValue = "";
  let cityValue = "";
  let priceMinValue = "";
  let priceMaxValue = "";
  let citiesCont = [];

  useEffect(() => {
    async function fetchData() {
      const req = await fetch(requests.fetchBProperties)
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
      var exists = !hash[current.LIST_3];
      hash[current.LIST_3] = true;
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
    unitValue = unitSelect.value ? unitSelect.value : 0;
    priceMinValue = priceMinSelect.value ? priceMinSelect.value : 0;
    priceMaxValue = priceMaxSelect.value
      ? priceMaxSelect.value
      : 999999999999999;
    searchChange(cityValue, unitValue, priceMinValue, priceMaxValue);
  };

  const searchChange = (city, unit, priceMinValue, priceMaxValue) => {
    var filteredData = result
      .filter((element) => {
        return element.LIST_39.toString()
          .toLowerCase()
          .includes(city.toLowerCase());
      })
      .filter((element) => {
        return parseInt(element.LIST_120) >= parseInt(unit);
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
      <div className="container-title-filters">
        <h2>Multifamily</h2>
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
              <select id="unit" ref={unitSelect} onChange={handleChange}>
                <option value="" selected>
                  Units
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="filter">
              <select id="minPrice" onChange={handleChange}>
                <option value="" selected>
                  Min Price
                </option>
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
          <div key={property.LIST_3} className="Card">
            <Card id={property.LIST_3} price={property.LIST_22} />
            <p>
              {property.LIST_41} | {property.LIST_39}
            </p>
            <div className="description">
              <div>
                <p>{parseInt(property.LIST_120)}</p>
                <img src="img/unit.png" alt="units" />
              </div>
              <p className="desc-level">
                {`${parseInt(property.LIST_48)} sqft`}
              </p>
            </div>
            <ModalComponent property={property} type="multifamily" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Multyfamily;
