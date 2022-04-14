import React from "react";
import "./Shared.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="bg-black">
        <div className="container content-footer">
          <div className="colbank">
            <img src="./img/logo_blanco_50.png" alt="Logotipo Yadi Rosales" />
            <img
              src="./img/Logo_151006_Pryor_Realty_Inc_HZ_W_MO.png"
              alt="Logotipo Coldwell Banker"
            />
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
              <img
                src="./img/equal-housing-opportunity.webp"
                alt="Equal Housing Logo"
              />
              <img src="./img/realtor.webp" alt="Realtor logo" />
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
            <p>&copy; 2021 Coldwell Banker. All Rights Reserved.</p>
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
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copy-bliones">
          <p>
            &copy; 2022. Desarrollado por Bliones. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
