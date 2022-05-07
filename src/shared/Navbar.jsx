import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <NavContainer>
      <img src="./img/logo_blanco_50.png" alt="Logotipo" />
      <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      <div className={`links-container ${clicked ? "active" : ""}`}>
        <a onClick={handleClick} href="https://yadirosalesrealtor.com/">Home</a>
        <a onClick={handleClick} href="https://yadirosalesrealtor.com/about-me/">About me</a>
        <a onClick={handleClick} href="https://yadirosalesrealtor.com/testimonials/">Testimonials</a>
        <a onClick={handleClick} href="https://yadirosalesrealtor.com/gallery/">Gallery</a>
        <a onClick={handleClick} href="https://yadirosalesrealtor.com/contact-me/">Contact me</a>
        <a onClick={handleClick} href="https://yadirosalesrealtor.com/inicio/">Español</a>
      </div>
      <div className="burger">
        <Burger clicked={clicked} handleClick={handleClick} />
      </div>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  img {
    width: 7rem;
  }
  .links-container {
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.6s ease;
    a {
      color: #000;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: #fff;
        display: inline;
      }
    }
  }

  .links-container.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 200%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      color: #ccc;
      margin: 2rem;
    }
  }
  a {
    text-decoration: none;
    color: #aaa;
    margin-right: 1rem;
  }
  a:hover {
    color: #fff;
  }
  padding: 0.4rem;
  background-color: rgba(17, 17, 17, 0.7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 25;
  position: fixed;
  left: 0;
  right: 0;
  height: 4rem;

  .burger {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  position: absolute;
  background-color: rgba(17, 17, 17, 0.9);
  top: -700px;
  left: -1000px;
  right: 0;
  bottom: 0;
  border-top: 2px solid #0034c8;
  z-index: -1;
  transition: all 0.6s ease;
  &.active {
    border-radius: 0 0 80% 0;
    top: 4rem;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
  }
`;
