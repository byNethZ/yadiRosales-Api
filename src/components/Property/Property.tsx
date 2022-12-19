import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import credentials from "../../credentials";
import { PropertyProps } from "../../interfaces/Propety.interface";
import requests from "../../request";
import Map from "./../../shared/Map";
import Slider from "../../shared/Slider";

import "./property.css";
import AlertTime from "../../shared/AlertTime/AlertTime";
import ContactForm from "../../shared/ContactForm/ContactForm";
import Back from "../../shared/Back/Back";

const Property = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<PropertyProps>();
  const [minutesAgo, setMinutesAgo] = useState<number>(0);

  useEffect(() => {
    let minutes = new Date().getMinutes();

    if (id) fetchData(id);
    setMinutesAgo(minutes);
  }, [id]);

  const fetchData = async (id: string) => {
    const response = await fetch(`${requests.fetchDataProperty}${id}`);
    const data = await response.json();
    //console.log(data);
    setProperty(data.data);
  };

  return (
    <div className="property">
      <div className="property-header">
        <Back/>
        <div className="property-header-container">
          <h3 className="property-header-street">
            {property?.street_number} {property?.street}{" "}
            {property?.street_suffix}
          </h3>
          <p className="property-header-city">
            {property?.city} {property?.state} {property?.zipcode}
          </p>
          <div className="property-header-price">
            <h2 className="header-price">
              {property?.price &&
                parseInt(property?.price).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                })}
            </h2>
            <div className="property-container-price">
              <h4>
                Status: <span>{property?.status}</span>
              </h4>{" "}
              <h4>
                MLS #: <span>{property?.list_number}</span>
              </h4>
            </div>
          </div>
          <div className="property-time-container">
            <AlertTime time={property?.updated_at} status={property?.status} />
          </div>
          <p className="minutes-ago">Updated {minutesAgo} minutes ago</p>
        </div>
      </div>

      <div className="slider-price-container container-content">
        <Slider list_number={property?.list_number} />
        <div className="property-table-price">
          <div className="property-table-price-cell">
            <h2>
              {property?.price &&
                parseInt(property?.price).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                })}
            </h2>
          </div>

          <div className="property-table-price-row">
            <div>
              <h5>{property?.bedrooms ? property?.bedrooms : "N/A"}</h5>
              <p>Beds</p>
            </div>
            <div>
              <h5>{property?.acres ? property?.acres : "N/A"}</h5>
              <p>Acres</p>
            </div>
          </div>

          <div className="property-table-price-row">
            <div>
              <h5>{property?.baths ? property?.baths : "N/A"}</h5>
              <p>Baths</p>
            </div>
            <div>
              <h5>{property?.baths_mid ? property?.baths_mid : "N/A"}</h5>
              <p>1/2 Baths</p>
            </div>
          </div>

          <div className="property-table-price-row">
            <div>
              <h5>{property?.sq_total ? property?.sq_total : "N/A"}</h5>
              <p>SQFT</p>
            </div>
            <div>
              <h5>{property?.description ? property?.description : "N/A"}</h5>
              <p>Levels</p>
            </div>
          </div>
          <div className="property-table-neighborhood">
            <div>
              <h5>Subdivision:</h5>
              <p>{property?.subdivision}</p>
            </div>
            <div>
              <h5>Type:</h5>
              <p>{property?.subtype}</p>
            </div>
            <div>
              <h5>Built:</h5>
              <p>{property?.year_built}</p>
            </div>
            <div>
              <h5>County:</h5>
              <p>{property?.county}</p>
            </div>
            <div>
              <h5>City:</h5>
              <p>{property?.city}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="des-tables-container container-content">
        <div className="tables-price-school">
          <div className="property-table-school">
            <div className="property-table-school-header">
              <h3>School Information</h3>
            </div>
            <div className="property-table-school-row">
              <h5>Elementary School:</h5>
              <p>{property?.elementary_school}</p>
            </div>
            <div className="property-table-school-row">
              <h5>Middle School:</h5>
              <p>{property?.middle_school}</p>
            </div>
            <div className="property-table-school-row">
              <h5>High School:</h5>
              <p>{property?.high_school}</p>
            </div>
          </div>
        </div>

        <div className="description">
          <div className="description-header-container">
            <h3>Description</h3>
          </div>
          <div className="description-info">
            <p>{property?.public_remarks}</p>
          </div>
        </div>
      </div>

      <div className="property-features-container container-content">
        <div className="property-features">
          <div className="property-features-header">
            <h4>Exterior Features</h4>
          </div>
          <div className="property-table-features">
            {property?.gf_exterior && (
              <div className="property-table-features-row">
                <div>
                  <h6>Exterior</h6>
                </div>
                <div>
                  <p>{property?.gf_exterior}</p>
                </div>
              </div>
            )}
            {property?.exterior_features && (
              <div className="property-table-features-row">
                <div>
                  <h6>Exterior Features</h6>
                </div>
                <div>
                  <p>{property?.exterior_features}</p>
                </div>
              </div>
            )}
            {property?.gf_foundation && (
              <div className="property-table-features-row">
                <div>
                  <h6>Foundation</h6>
                </div>
                <div>
                  <p>{property?.gf_foundation}</p>
                </div>
              </div>
            )}
            {property?.garage_parking && (
              <div className="property-table-features-row">
                <div>
                  <h6>Garage Parking</h6>
                </div>
                <div>
                  <p>{property?.garage_parking}</p>
                </div>
              </div>
            )}
            {property?.description && (
              <div className="property-table-features-row">
                <div>
                  <h6>Lot Description</h6>
                </div>
                <div>
                  <p>{property?.description}</p>
                </div>
              </div>
            )}
            {property?.lot_size && (
              <div className="property-table-features-row">
                <div>
                  <h6>Lot Size Dimensions</h6>
                </div>
                <div>
                  <p>{property?.lot_size}</p>
                </div>
              </div>
            )}
            {property?.roofing && (
              <div className="property-table-features-row">
                <div>
                  <h6>Roof</h6>
                </div>
                <div>
                  <p>{property?.roofing}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="property-features">
          <div className="property-features-header">
            <h4>Interior Features</h4>
          </div>
          <div className="property-table-features">
            {property?.gf_appliances && (
              <div className="property-table-features-row">
                <div>
                  <h6>Appliances</h6>
                </div>
                <div>
                  <p>{property?.gf_appliances}</p>
                </div>
              </div>
            )}
            {property?.basement && (
              <div className="property-table-features-row">
                <div>
                  <h6>Basement</h6>
                </div>
                <div>
                  <p>{property?.basement}</p>
                </div>
              </div>
            )}
            {property?.baths && (
              <div className="property-table-features-row">
                <div>
                  <h6>Baths Total</h6>
                </div>
                <div>
                  <p>{property?.baths}</p>
                </div>
              </div>
            )}
            {property?.bed_bath && (
              <div className="property-table-features-row">
                <div>
                  <h6>Beds and Baths</h6>
                </div>
                <div>
                  <p>{property?.bed_bath}</p>
                </div>
              </div>
            )}
            {property?.cooling && (
              <div className="property-table-features-row">
                <div>
                  <h6>Cooling</h6>
                </div>
                <div>
                  <p>{property?.cooling}</p>
                </div>
              </div>
            )}
            {property?.dining && (
              <div className="property-table-features-row">
                <div>
                  <h6>Dining</h6>
                </div>
                <div>
                  <p>{property?.dining}</p>
                </div>
              </div>
            )}
            {property?.gf_fireplace && (
              <div className="property-table-features-row">
                <div>
                  <h6>Fireplace</h6>
                </div>
                <div>
                  <p>{property?.gf_fireplace}</p>
                </div>
              </div>
            )}
            {property?.fireplace_list && (
              <div className="property-table-features-row">
                <div>
                  <h6>Fireplaces</h6>
                </div>
                <div>
                  <p>{property?.fireplace_list}</p>
                </div>
              </div>
            )}
            {property?.floors && (
              <div className="property-table-features-row">
                <div>
                  <h6>Floors</h6>
                </div>
                <div>
                  <p>{property?.floors}</p>
                </div>
              </div>
            )}
            {property?.heating && (
              <div className="property-table-features-row">
                <div>
                  <h6>Heating</h6>
                </div>
                <div>
                  <p>{property?.heating}</p>
                </div>
              </div>
            )}
            {property?.interior && (
              <div className="property-table-features-row">
                <div>
                  <h6>Interior Features</h6>
                </div>
                <div>
                  <p>{property?.interior}</p>
                </div>
              </div>
            )}
            {property?.gf_rooms && (
              <div className="property-table-features-row">
                <div>
                  <h6>Rooms</h6>
                </div>
                <div>
                  <p>{property?.gf_rooms}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="property-features">
          <div className="property-features-header">
            <h4>Property Features</h4>
          </div>
          <div className="property-table-features">
            {property?.auction && (
              <div className="property-table-features-row">
                <div>
                  <h6>Auction</h6>
                </div>
                <div>
                  <p>{property?.auction}</p>
                </div>
              </div>
            )}
            {property?.builders_warranty && (
              <div className="property-table-features-row">
                <div>
                  <h6>Builders Warranty</h6>
                </div>
                <div>
                  <p>{property?.builders_warranty}</p>
                </div>
              </div>
            )}
            {property?.gf_community_features && (
              <div className="property-table-features-row">
                <div>
                  <h6>Community Features</h6>
                </div>
                <div>
                  <p>{property?.gf_community_features}</p>
                </div>
              </div>
            )}
            {property?.gf_lot_description && (
              <div className="property-table-features-row">
                <div>
                  <h6>Description</h6>
                </div>
                <div>
                  <p>{property?.gf_lot_description}</p>
                </div>
              </div>
            )}
            {property?.financing_available && (
              <div className="property-table-features-row">
                <div>
                  <h6>Financing</h6>
                </div>
                <div>
                  <p>{property?.financing_available}</p>
                </div>
              </div>
            )}
            {property?.home_warranty && (
              <div className="property-table-features-row">
                <div>
                  <h6>Home Warranty</h6>
                </div>
                <div>
                  <p>{property?.home_warranty}</p>
                </div>
              </div>
            )}
            {property?.possession && (
              <div className="property-table-features-row">
                <div>
                  <h6>Possession</h6>
                </div>
                <div>
                  <p>{property?.possession}</p>
                </div>
              </div>
            )}
            {property?.taxes && (
              <div className="property-table-features-row">
                <div>
                  <h6>Taxes</h6>
                </div>
                <div>
                  <p>{property?.taxes}</p>
                </div>
              </div>
            )}
            {property?.type_sale && (
              <div className="property-table-features-row">
                <div>
                  <h6>Type of Sale</h6>
                </div>
                <div>
                  <p>{property?.type_sale}</p>
                </div>
              </div>
            )}
            {property?.utilities && (
              <div className="property-table-features-row">
                <div>
                  <h6>Utilities</h6>
                </div>
                <div>
                  <p>{property?.utilities}</p>
                </div>
              </div>
            )}
            {property?.water_sewer && (
              <div className="property-table-features-row">
                <div>
                  <h6>Water Sewer</h6>
                </div>
                <div>
                  <p>{property?.water_sewer}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Map
        lat={property?.latitude}
        long={property?.longitude}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${credentials.mapsKey}&callback=useJsApiLoader`}
      />
      <ContactForm id={property?.id} />
    </div>
  );
};

export default Property;
