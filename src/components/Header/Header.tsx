import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../shared/Navbar";

import logo from "./../../img/logo_blanco_50.png";

import videoHeaderWebm from "./../../video/Video_home-_4.webm";
import videoHeaderMp4 from "./../../video/Video_home-_4.mp4";

import "./header.css";

const Header = () => {
  const location = useLocation();

  //console.log(location);

  return (
    <>
      {location.pathname === "/" && (
        <div className="bg-header">
          <video className="video-header" playsInline autoPlay muted loop id="video-header">
            <source src={videoHeaderWebm} type="video/webm" />
            <source src={videoHeaderMp4} type="video/mp4" />
          </video>
          <Navbar></Navbar>
          <div className="logo-container-header">
            <img src={logo} alt="Logotipo" />
            <a
              href="https://yadirosalesrealtor.com/contact-me/"
              className="button-contact"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
      {location.pathname !== "/" && (
        <div className="bg-header-standard">
          <Navbar></Navbar>
        </div>
      )}
    </>
  );
};

export default Header;
