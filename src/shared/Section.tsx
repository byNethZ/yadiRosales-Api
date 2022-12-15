import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropertyProps } from "../interfaces/Propety.interface";
import requests from "../request";
import Card from "./Card";
import "./section.css";

interface Props {
  type: string;
  title: string;
}

const Section = ({ type, title }: Props) => {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${requests.fetchPropertiesHome}${type}`);
      const data = await response.json();
      //console.log(data.data)
      setProperties(data.data);
    };

    fetchData().catch(console.error);
  }, []);

  const handleClick = () => {
    navigate(`/properties/${type}`)
  }

  return (
    <div>
      <div className="header-section">
        <h2>{title}</h2>
        {properties.length > 0 && (
          <button onClick={handleClick} className="button-section">See More {">"}</button>
        )}
      </div>
      <div className="section-card-container">
        {properties.map((property: PropertyProps) => (
          <Card
            property={property}
            key={property.id}
          />
        ))}
      </div>
      {properties.length === 0 && <p>No results</p>}
    </div>
  );
};

export default Section;

//
