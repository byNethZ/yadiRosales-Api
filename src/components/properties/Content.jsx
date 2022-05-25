import React, { useEffect, useState } from "react";
import "../../shared/Card.css";
import "../../shared/ModalComponent.css";
import requests from "../../request";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { useLocation, useParams } from "react-router-dom";
const AutoplaySlider = withAutoplay(AwesomeSlider);

function Content() {
  const property = useParams();
  // const value = location.state.property;
  let info = property.property;
  console.log(info);
  console.log(property);

  let id = info.LIST_3 ? info.LIST_3 : info.LIST105;

  const [charging, setCharging] = useState(true);
  const [urlsImage, setUrlsImage] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await fetch(`${requests.fetchImagesUrl}${id}`)
        .then((response) => response.json())
        .then((info) => {
          setUrlsImage(info.imagesUrl);
          //console.log(info.imagesUrl);
          setCharging(false);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="modalcomponet">
      <div className="modal-content">
          <div className="header-modal">
            <h3>{`${info.LIST_31} ${info.LIST_34} ${info.LIST_37} ${info.LIST_35}`}</h3>
            <h4>{`${info.LIST_41}, ${info.LIST_39} ${info.LIST_43}`}</h4>
            <h2>$ {info.LIST_22.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h2>
          </div>
          <img
            className={`${
              charging === true ? "visible" : "invisible"
            } charging`}
            src="img/charging.gif"
            alt=""
          />
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
            //cssModule={coreStyles}
            className={`${charging === false ? "visible" : "invisible"} slider`}
          >
            {urlsImage.map((image) => (
              <div data-src={image ? image : 'img/No_image_available.jpg' } />
            ))}
          </AutoplaySlider>
          <div className="modal-info">
            <div className="flex-content">
              <h3>Address</h3>
              <p>
                {info.ADD0
                  ? info.ADD0
                  : `${info.LIST_31} ${info.LIST_33} ${info.LIST_34} ${info.LIST_37} ${info.LIST_35}`}
              </p>
              <h3>City</h3>
              <p>{info.LIST_39}</p>
              <h3>State</h3>
              <p>{info.LIST_40}</p>
              <h3>Exterior</h3>
              <p>
                {info.GF20141105190247060619000000
                  ? info.GF20141105190247060619000000
                  : info.GF20141111181918283208000000}
              </p>
              <h3>Roof</h3>
              <p>
                {info.GF20141105190410622745000000
                  ? info.GF20141105190410622745000000
                  : info.GF20141111181928080917000000}
              </p>
              <h3>Exterior Features</h3>
              <p>{info.GF20141105190325982321000000}</p>
              <h3>Year built</h3>
              <p>{info.LIST_53}</p>
              <h3>Levels</h3>
              <p>
                {info.GF20141105190204376686000000
                  ? info.GF20141105190204376686000000
                  : info.GF20141111181915289784000000}
              </p>
              <h3>Bedrooms</h3>
              <p>
                {info.LIST_66
                  ? info.LIST_66
                  : info.FEAT20141112141246597818000000}
              </p>
              <h3>Baths</h3>
              <p>
                {info.LIST_67
                  ? parseInt(info.LIST_67)
                  : 'N/A'}
              </p>
              <h3>Heating</h3>
              <p>
                {info.GF20141105190341847555000000
                  ? info.GF20141105190341847555000000
                  : info.GF20141111181923474927000000}
              </p>
              <h3>Cooling</h3>
              <p>
                {info.GF20141105190515312181000000
                  ? info.GF20141105190515312181000000
                  : info.GF20141111181914513396000000}
              </p>
              <p
                className={
                  info.GF20141105190217075291000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141105190217075291000000}
              </p>
              <p
                className={
                  info.GF20141105190355983445000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141105190355983445000000}
              </p>
              <p
                className={
                  info.GF20141105190528845508000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141105190528845508000000}
              </p>
              <p
                className={
                  info.GF20141105190553212029000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141105190553212029000000}
              </p>
              <p
                className={
                  info.GF20141105190946415363000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141105190946415363000000}
              </p>
              <p
                className={
                  info.GF20141205192125962774000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141205192125962774000000}
              </p>
              <p
                className={
                  info.GF20191112201228797891000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20191112201228797891000000}
              </p>
              <p
                className={
                  info.GF20141105190656459299000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141105190656459299000000}
              </p>
              <p
                className={
                  info.GF20141111181930176626000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141111181930176626000000}
              </p>
              <p
                className={
                  info.GF20141111181913366554000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141111181913366554000000}
              </p>
              <p
                className={
                  info.GF20191112201228804916000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20191112201228804916000000}
              </p>
              <p
                className={
                  info.GF20141111184659623250000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141111184659623250000000}
              </p>
              <p
                className={
                  info.GF20141111181912878437000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141111181912878437000000}
              </p>
              <p
                className={
                  info.GF20160124215512360728000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20160124215512360728000000}
              </p>
              <p
                className={
                  info.GF20160124215513600267000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20160124215513600267000000}
              </p>
              <p
                className={
                  info.GF20160124215514448326000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20160124215514448326000000}
              </p>
              <p
                className={
                  info.GF20160124215515744483000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20160124215515744483000000}
              </p>
              <p
                className={
                  info.GF20160124215514655984000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20160124215514655984000000}
              </p>
              <p
                className={
                  info.GF20141205150203596817000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141205150203596817000000}
              </p>
              <p
                className={
                  info.GF20141205150215701361000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141205150215701361000000}
              </p>
              <p
                className={
                  info.GF20141205150301729290000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141205150301729290000000}
              </p>
              <p
                className={
                  info.GF20141205150644103916000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141205150644103916000000}
              </p>
              <p
                className={
                  info.GF20141205150705700031000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141205150705700031000000}
              </p>
              <p
                className={
                  info.GF20141205150334445880000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141205150334445880000000}
              </p>
              <p
                className={
                  info.GF20141205150726465654000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141205150726465654000000}
              </p>
              <p className={
                  info.GF20141205150726465654000000 ? "visible cell-design" : "invisible"
                }>{info.GF20141105190303587949000000}</p>
            </div>
            <div className="public">
              <p
                className={
                  info.GF20160124215510874589000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20160124215510874589000000}
              </p>
              <p
                className={
                  info.GF20160124215512048001000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20160124215512048001000000}
              </p>
              <p
                className={
                  info.GF20141117181045021105000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141117181045021105000000}
              </p>
              <p
                className={
                  info.GF20141111182425714915000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141111182425714915000000}
              </p>
              <p
                className={
                  info.GF20141111182436214109000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141111182436214109000000}
              </p>
              <p
                className={
                  info.GF20141111182448209798000000 ? "visible cell-design" : "invisible"
                }
              >
                {info.GF20141111182448209798000000}
              </p>
              <h3 className={`${info.LIST_78 ? 'visible' : 'invisible'}`} >Description</h3>
              <p>{info.LIST_78}</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Content;
