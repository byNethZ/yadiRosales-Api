import React, { useEffect, useState } from "react";
import requests from "../../request";
import "./../openhouses/OpenHouses.css";
import "../../shared/Card.css";
import "../../shared/Shared.css";

function Lots() {
  const [charging, setCharging] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await fetch(requests.fetchOffice)
        .then((response) => response.json())
        .then((info) => {
          setData(info.data);
          //console.log(info.data);
          setCharging(false);
        });
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Offices</h2>
      <div className="OpenHouses">
        <img
          className={`${charging === true ? "visible" : "invisible"} charging`}
          src="img/charging.gif"
          alt=""
        />
        {data.map((property) => (
          <div key={property.EVENT0} className="Card">
            <h3>Office</h3>
            <p>{property.OFFICE_2}</p>
            <h3>Phone</h3>
            <p>{property.OFFICE_3}</p>
            <h3>Address</h3>
            <p>{property.OFFICE_10}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lots;