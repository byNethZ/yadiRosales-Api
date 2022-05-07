import React from "react";
import "./Shared.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="Header">
      <div className="mask"></div>
      <Navbar></Navbar>

{/*       <div className="navbar">
        <img src="./img/logo_blanco_50.png" alt="Logotipo" />
        <ul className="">
          <li>
            <a href="https://yadirosalesrealtor.com/">Home</a>
          </li>
          <li>
            <a href="https://yadirosalesrealtor.com/about-me/">About me</a>
          </li>
          <li>
            <a href="https://yadirosalesrealtor.com/testimonials/">
              Testimonials
            </a>
          </li>
          <li>
            <a href="https://yadirosalesrealtor.com/gallery/">Gallery</a>
          </li>
          <li>
            <a href="https://yadirosalesrealtor.com/contact-me/">Contact me</a>
          </li>
        </ul>
      </div> */}
      <div className="logo">
        <img src="./img/logo_blanco_50.png" alt="Logotipo Yadi Rosales" />
      </div>
    </div>
  );
}

export default Header;
