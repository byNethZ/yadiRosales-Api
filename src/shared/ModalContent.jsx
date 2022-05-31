import React, { useEffect, useState } from 'react';
import requests from "../request";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import credentials from "./../credentials";
import Map from "./Map";
import "./Shared.css";
import "./ModalComponent.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function ModalContent(props) {
    let type = props.type;
    let info = props.info;
  
    let id = info.LIST_3 ? info.LIST_3 : info.LIST105;

    const [charging, setCharging] = useState(true);
    const [urlsImage, setUrlsImage] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const req = await fetch(`${requests.fetchImagesUrl}${id}`)
            .then((response) => response.json())
            .then((info) => {
              setUrlsImage(info.imagesUrl);
              console.log(info.imagesUrl);
              setCharging(false);
            });
        }
        fetchData();
      }, []);

  return (
    <div className="modal-content">
    <div className="header-modal">
      <div className="header-container">
        <h3>{`${info.LIST_31} ${info.LIST_34} ${info.LIST_37} ${info.LIST_35}`}</h3>
        <h4>{`${info.LIST_41}, ${info.LIST_39} ${info.LIST_43}`}</h4>
        <h2>
          $ {info.LIST_22.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
        </h2>
      </div>
    </div>
    <img
      className={`${
        charging === true ? "visible" : "invisible"
      } charging`}
      src="img/charging.gif"
      alt=""
    />
    <div className="modal-container">
      <div className="dos-tercios">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
          //cssModule={coreStyles}
          className={`${
            charging === false ? "visible" : "invisible"
          } slider`}
        >
          {urlsImage.map((image) => (
            <div
              data-src={image ? image : "img/No_image_available.jpg"}
            />
          ))}
        </AutoplaySlider>
        <div className="description-modal">
          <div className="border-bottom mb-1">
            <h3>Description</h3>
          </div>
          <p>{info.LIST_231}</p>
        </div>
      </div>
      <div className="un-tercio">
        <div className="table table-principal-features">
          <div className="una-celda text-center border-bottom">
            <h3 className="price-table">
              $ {info.LIST_22.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </h3>
          </div>
          <div className="dos-celdas text-center">
            <div>
              <h3>Baths</h3>
              <p>{info.LIST_67 ? parseInt(info.LIST_67) : "N/A"}</p>
            </div>
            <div>
              <h3>Bedrooms</h3>
              <p>
                {info.LIST_66
                  ? info.LIST_66
                  : info.FEAT20141112141246597818000000}
              </p>
            </div>
          </div>
          <div className="una-celda just-space-between padding-05 bg-grey">
            <h3>Subdivision:</h3>
            <p>{info.LIST_77}</p>
          </div>
          <div className="una-celda just-space-between padding-05">
            <h3>Type:</h3>
            <p>{info.LIST_9}</p>
          </div>
          <div className="una-celda just-space-between padding-05 bg-grey">
            <h3>Built:</h3>
            <p>{info.LIST_53}</p>
          </div>
          <div className="una-celda just-space-between padding-05">
            <h3>County:</h3>
            <p>{info.LIST_41}</p>
          </div>
          <div className="una-celda just-space-between padding-05 bg-grey">
            <h3>State:</h3>
            <p>{info.LIST_40}</p>
          </div>
        </div>
        <div className="table table-principal-features">
          <div className="una-celda text-center">
            <h3>School Information</h3>
          </div>
          <div className="una-celda just-space-between padding-05 bg-grey">
            <h3>Elementary School:</h3>
            <p>{info.LIST_93}</p>
          </div>
          <div className="una-celda just-space-between padding-05">
            <h3>Middle School:</h3>
            <p>{info.LIST_94}</p>
          </div>
          <div className="una-celda just-space-between padding-05 bg-grey">
            <h3>High School:</h3>
            <p>{info.LIST_95}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="modal-info modal-container">
      <div className="un-tercio">
        <div className="border-bottom mb-1">
          <h3>Exterior Features</h3>
        </div>
        {type !== "lots" ? (
          <div className="table table-features">
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Exterior</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141105190247060619000000}
                  {info.GF20160124215513885235000000}
                  {info.GF20141111181918283208000000}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Exterior Features</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141105190325982321000000}
                  {info.GF20160124215513600267000000}
                  {info.GF20141111181913366554000000}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Foundation</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141105190907544571000000}
                  {info.GF20160124215514448326000000}
                  {info.GF20141111181912878437000000}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Garage Parking</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141105190217075291000000}
                  {info.GF20160124215514655984000000}
                  {info.GF20141111184659623250000000}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Lot Description</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141105190608614137000000}
                  {info.GF20160124215515312425000000}
                  {info.GF20141111181925888821000000}
                  {info.GF20141205150301729290000000}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Lot Size Dimensions</h3>
              </div>
              <div className="text-right padding-1">
                <p>{info.LIST_56}</p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Roof</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141105190410622745000000}
                  {info.GF20160124215515923185000000}
                  {info.GF20141111181928080917000000}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Windows</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141205184313434433000000}
                  {info.GF20160124215519597101000000}
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {type === "lots" ? (
          <div className="table table-features">
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Lot Description</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141105190608614137000000}
                  {info.GF20160124215515312425000000}
                  {info.GF20141111181925888821000000}
                  {info.GF20141205150301729290000000}
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {type !== "lots" ? (
        <div className="un-tercio">
          <div className="border-bottom mb-1">
            <h3>Interior Features</h3>
          </div>
          <div className="table table-features">
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Appliances</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141105190528845508000000}
                  {info.GF20160124215510874589000000}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Basement</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141105190907544571000000}
                  {info.GF20160124215512180090000000}
                  {info.GF20141111181912878437000000}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Baths Total</h3>
              </div>
              <div className="text-right padding-1">
                <p>{info.LIST_67 ? info.LIST_67 : "N/A"}</p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Beds and Baths</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141105190355983445000000}
                  {info.GF20160124215512048001000000}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Cooling</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141105190341847555000000}
                  {info.GF20160124215512599544000000}
                  {info.GF20141111181914513396000000}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Dining</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141105190553212029000000}
                  {info.GF20160124215513303598000000}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Equipment</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141105190656459299000000}
                  {info.GF20160124215513740372000000}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Fireplace</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141105190749018131000000}
                  {info.GF20160124215514501848000000}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Floors</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141205192125962774000000}
                  {info.GF20160124215514294191000000}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Heating</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141105190515312181000000}
                  {info.GF20160124215515053649000000}
                  {info.GF20141111181923474927000000}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Interior Features</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141105190231914421000000}
                  {info.GF20160124215515195178000000}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Number Of Rooms</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.LIST_65}
                  {info.GF20141111182425714915000000 ? "Variable" : ""}
                </p>
              </div>
            </div>
            <div className="dos-celdas">
              <div className="text-left padding-1">
                <h3>Rooms</h3>
              </div>
              <div className="text-right padding-1">
                <p>
                  {info.GF20141117181045021105000000}
                  {info.GF20141111182425714915000000}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="un-tercio">
        <div className="border-bottom mb-1">
          <h3>Property Features</h3>
        </div>
        <div className="table table-features">
          <div className="dos-celdas">
            <div className="text-left padding-1">
              <h3>Description</h3>
            </div>
            <div className="text-right padding-1">
              <p>
                {info.GF20141105190204376686000000}
                {info.GF20160124215513382492000000}
                {info.GF20141111181915289784000000}
                {info.GF20141205150215701361000000}
              </p>
            </div>
          </div>
          <div className="dos-celdas">
            <div className="text-left padding-1">
              <h3>Financing</h3>
            </div>
            <div className="text-right padding-1">
              <p>
                {info.GF20141105190804289906000000}
                {info.GF20160124215514035865000000}
                {info.GF20141111181919318145000000}
                {info.GF20141205150512915209000000}
              </p>
            </div>
          </div>
          <div className="dos-celdas">
            <div className="text-left padding-1">
              <h3>Possession</h3>
            </div>
            <div className="text-right padding-1">
              <p>
                {info.GF20141105190625140178000000}
                {info.GF20160124215515828251000000}
                {info.GF20141111181927765464000000}
                {info.GF20141205150412467963000000}
              </p>
            </div>
          </div>
          <div className="dos-celdas">
            <div className="text-left padding-1">
              <h3>Utilities</h3>
            </div>
            <div className="text-right padding-1">
              <p>
                {info.GF20141205192215207835000000}
                {info.GF20160124215519544203000000}
                {info.GF20141111181930176626000000}
              </p>
            </div>
          </div>
          <div className="dos-celdas">
            <div className="text-left padding-1">
              <h3>Water Sewer</h3>
            </div>
            <div className="text-right padding-1">
              <p>
                {info.GF20141105190303587949000000}
                {info.GF20160124215519643203000000}
                {info.GF20141111181931391381000000}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal-container justify-center">
      <Map
        lat={info.LIST_46}
        long={info.LIST_47}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${credentials.mapsKey}&callback=useJsApiLoader`}
      />
    </div>
  </div>
  )
}

export default ModalContent