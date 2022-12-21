import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropertyProps } from "../interfaces/Propety.interface";

import noImage from "./../img/No_image_available.svg";

import logo from './../img/logo_blanco_50.png';
import mlsLogo from './../img/idx-small.gif';

import "./Card.css";
import AlertTime from "./AlertTime/AlertTime";

interface Props {
  property: PropertyProps;
}

function Card({ property }: Props) {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate(`/property/${property.list_number}`);
  };

  //replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

  return (
    <div onClick={handleclick} className="card">
      <div className="image-div">
        <div className="bg-gradient"></div>
        <img
          className={`visible image`}
          src={property.image ? property.image : noImage}
          alt={property.list_number + ""}
        />
        <div className="alert-container">
          <AlertTime time={property.updated_at} status={property.status} />
        </div>
        <div className="button-details">
          <button>View Details</button>
        </div>
        <div className="image-info">
          {property.price && (
            <h3 className="price">
              {parseInt(property.price).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0
              })}
            </h3>
          )}
          {property.picture_count && (
            <div className="picture-count">
              <p>1 of {property.picture_count}</p>
            </div>
          )}
        </div>
      </div>
      <div>
        <h2 className="direction">
          {property.street} | {property.city}
        </h2>
      </div>
      <div className="features">
        {property.bedrooms && (
          <p>
            <span>{property.bedrooms}</span> bd
          </p>
        )}
        {property.baths_full && (
          <p>
            <span>{property.baths_full}</span> ba
          </p>
        )}
        {property.baths_mid! > 0 && (
          <p>
            <span>{property.baths_mid}</span> &#189; ba
          </p>
        )}
        {property.sq_total && (
          <p>
            <span>{parseInt(property.sq_total)}</span> sqft
          </p>
        )}
      </div>
      { property.listing_member_shortid === '9393' && (
        <div className="yadi-rosales-logo">
          <img src={logo} alt="Yadi Rosales" />
        </div>
      )}
      {property.listing_office_name && (
        <div className="office-info">
          <p>{property.listing_office_name}</p>
        </div>
      )}
      <div className="mls-container">
        <img src={mlsLogo} alt="MLS Share" />
      </div>
    </div>
  );
}

export default Card;
