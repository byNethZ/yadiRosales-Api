import React, { useEffect, useState, lazy, Suspense } from "react";
import Modal from "react-modal";
import "./Shared.css";
import "./ModalComponent.css";
import requests from "../request";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import Map from "./Map";
import credentials from "./../credentials";
//import ModalContent from "./ModalContent";

const ModalContent = lazy(() => import("./ModalContent"));

const AutoplaySlider = withAutoplay(AwesomeSlider);

function ModalComponent(property) {
  let type = property.type;
  let info = property.property;

  let id = info.LIST_3 ? info.LIST_3 : info.LIST105;
  //console.log(info);

  //let modalIsOpen = property.modalIsOpen;
  //let afterOpenModal = property.afterOpenModal;
  //let closeModal = property.closeModal;

  const [charging, setCharging] = useState(true);
  const [urlsImage, setUrlsImage] = useState([]);

  //const [modalIsOpen, setIsOpen] = React.useState(false);

  // const [closeModal, setIsClose] = React.useState(property.closeModal);
  // const [modalIsOpen, setIsOpen] = React.useState(property.modalIsOpen);

  //last code
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

  /*   useEffect(() => {
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
  }, []); */

  return (
    <div className="modalcomponet">
      <button className="buttons" onClick={openModal}>
        See more
      </button>
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        //style={customStyles}
        contentLabel="PropertyModal"
      >
        <button
          className="buttons button-modal button-close"
          onClick={closeModal}
        >
          X
        </button>
        <Suspense
          fallback={
            <div>
              <img className={`charging-modal`} src="img/charging.gif" alt="" />
            </div>
          }
        >
          <ModalContent type={type} info={info} />
        </Suspense>
      </Modal>
    </div>
  );
}

export default ModalComponent;
