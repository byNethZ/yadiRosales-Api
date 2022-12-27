import "./App.css";
import "./shared/Modal.css";
import Header from "./components/Header/Header";
import Footer from "./shared/Footer";

import Modal from "react-modal";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Catalogue from "./components/Catalogue/Catalogue";
import Property from "./components/Property/Property";
import ContactForm from "./shared/ContactForm/ContactForm";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

Modal.setAppElement("#root");

function App() {
  const { height, width } = useWindowDimensions();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showClose, setShowClose] = useState(true);
  const [iterator, setIterator] = useState(1);
  const [lapse, setLapse] = useState(30000);
  const [isSendedMessage, setIsSendedMessage] = useState(
    localStorage.getItem("messageSended")
  );

  useEffect(() => {
    setTimeout(function () {
      if (!modalIsOpen && !isSendedMessage) setIsOpen(true);
    }, lapse);
    if (iterator >= 10) {
      setShowClose(false);
    }
    setIterator(iterator + 1);
    setLapse(randomNumber(30, 90));
    //console.log("launch", iterator, lapse, isSendedMessage);
  }, [modalIsOpen, isSendedMessage]);

  const randomNumber = (min, max) => {
    return Math.floor((Math.random() * (max - min) + min) * 1000);
  };
  return (
    <div className="App">
      <Router>
        <Header width={width} height={height} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/:gallery/:type/:feature/:value"
            element={<Catalogue />}
          />
          <Route path="/:gallery/:feature" element={<Catalogue />} />
          <Route path="/coldwell-banker" element={<Catalogue />} />
          <Route path="/property/:id" element={<Property />} />
        </Routes>
      </Router>
      <Modal isOpen={modalIsOpen} className="modal">
        {showClose && (
          <div className="modal-button-container">
            <button
              className="modal-button-close"
              onClick={() => setIsOpen(false)}
            >
              &#9932;
            </button>
          </div>
        )}
        <ContactForm
          setCloseModal={(res) => {
            setIsOpen(res);
            setIsSendedMessage(localStorage.getItem("messageSended"));
            console.log(isSendedMessage);
          }}
        />
      </Modal>
      <Footer />
    </div>
  );
}

export default App;
