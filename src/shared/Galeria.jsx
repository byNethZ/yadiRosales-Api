import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./Shared.css";
import "./ModalComponent.css";
import requests from "../request";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
const AutoplaySlider = withAutoplay(AwesomeSlider);

function Galeria(property) {
  //console.log(property);
  let info = property.property;

  let id = info.LIST_3 ? info.LIST_3 : info.LIST105;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //modal.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      <button className="buttons" onClick={openModal}>
        See Gallery
      </button>
      <Modal
        className="modal width-10"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        //style={customStyles}
        contentLabel="PropertyModal"
      >
        <div className="modal-content">
          <button className="buttons button-modal button-close" onClick={closeModal}>
            close
          </button>
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
              <div data-src={image} />
            ))}
          </AutoplaySlider>
        </div>
      </Modal>
    </div>
  );
}

export default Galeria;
