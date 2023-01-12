import React from "react";
import "./Shared.css";

import logoWebp from "./../img/logo_blanco_50.webp";
import logoPng from "./../img/logo_blanco_50.png";
import mlsLogo from './../img/idx-small.gif';

import realtyWebp from "./../img/Logo_151006_Pryor_Realty_Inc_HZ_W_MO.webp";
import realtyPng from "./../img/Logo_151006_Pryor_Realty_Inc_HZ_W_MO.png";

import housingImageWebp from "./../img/equal-housing-opportunity.webp";
import realtor from "./../img/realtor.webp";

function Footer() {
  const moonLanding = new Date();

  let year = moonLanding.getFullYear();

  return (
    <div className="Footer">
      <div className="bg-black">
        <div className="container content-footer">
          <div className="colbank">
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <source srcSet={logoPng} type="image/png" />
              <img src={logoPng} alt="Logotipo Yadi Rosales" />
            </picture>
            <picture>
              <source srcSet={realtyWebp} type="image/webp" />
              <source srcSet={realtyPng} type="image/png" />
              <img src={realtyPng} alt="Logotipo Coldwell Banker" />
            </picture>
          </div>
          <div className="footer-info">
            <div className="info-yadi">
              <p>Yadi Rosales</p>
              <p>Bilingual Realtor</p>
              <p>COLDWELL BANKER PRYOR REALTY, INC.</p>
              <p>2125 Hickory Valley Road</p>
              <p>Chattanooga, TN 37421</p>
            </div>
            <div className="info-logos">
              <img src={housingImageWebp} alt="Equal Housing Logo" />
              <img src={realtor} alt="Realtor logo" />
              <div></div>
            </div>
            <div className="info-realty">
              <p>Email: yadiholdsthekey@gmail.com</p>
              <p>Cell: 423-710-6046</p>
              <p>Office: 423-894-6762</p>
              <p>EFAX: 423-826-8175</p>
              <p>TN Lic. 323071</p>
              <p>GA Lic. 345045</p>
            </div>
          </div>
          <div className="footer-rigths">
            <p>&copy; {year} Coldwell Banker. All Rights Reserved.</p>
            <p>
              Coldwell Banker and the Coldwell Banker logos are trademarks of
              Coldwell Banker Real Estate LLC. The Coldwell Banker ® System is
              comprised of company owned offices which are owned by a subsidiary
              of Realogy Brokerage Group LLC and franchised offices which are
              independently owned and operated.
            </p>
            <p>
              The Coldwell Banker System fully supports the principles of the
              Fair Housing Act and the Equal Opportunity Act.
            </p>
            <p>Video shot on location at Goodall Homes at Westview Crossing.</p>
            <div className="mls-container">
              <img src={mlsLogo} alt="MLS Share" />
            </div>
            <p>
              &copy; {year} All rights reserved. IDX information is provided
              exclusively for consumers' personal, non-commercial use and may
              not be used for any purpose other than to identify prospective
              properties consumers may be interested in purchasing. Information
              is deemed reliable but is not guaranteed accurate by the MLS or
              Yadi Rosales Realtor | Real Estate Partners Chattanooga LLC. Data
              last updated: {moonLanding.toISOString()}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copy-bliones">
          <p>
            &copy; {year}. Desarrollado por{" "}
            <a className="blione" href="https://www.bliones.com/">
              Bliones
            </a>
            . Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
