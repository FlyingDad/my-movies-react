import React from "react";
import "./header.css";
import popcorn from '../img/popcorn-s.png';

const Header = () => {
  return (
    <div id="header" className="flex justify-between w-90 bg-navy ba b--green br2">
				<img src={popcorn} alt="popcorn" className="ph4"/>
      	<h1 className="light-green"> My Movies</h1>
				<img src={popcorn} alt="popcorn" className="ph4" />
    </div>
  );
};

export default Header;
