import React from "react";
import "./Shared.css";

function Header() {
  return (
    <div className="Header">
      <div className="mask"></div>
      <div className="navbar">
        <img src="./img/logo_blanco_50.png" alt="Logotipo" />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Contact me</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <img src="./img/logo_blanco_50.png" alt="Logotipo Yadi Rosales" />
      </div>
    </div>
  );
}

export default Header;
