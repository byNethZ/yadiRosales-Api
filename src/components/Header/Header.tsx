import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Search from "../../shared/Search";

import "./header.css";

interface Props {
  width: number;
  height: number;
}

const Header = ({ width, height }: Props) => {
  let location = useLocation();
  //console.log(location.pathname)

  return (
    <>
      {location.pathname === "/" && (
        <div>
          <Navbar></Navbar>
          <Search width={width} isHome={true} />
          <div className="bg-header"></div>
        </div>
      )}
      {location.pathname !== "/" && (
        <div className="bg-header-standard">
          <Navbar></Navbar>
          <Search width={width} isHome={false}/>
        </div>
      )}
    </>
  );
};

export default Header;
