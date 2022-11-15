import React from "react";
import logo from "./images/logo.png"

const Header = () =>{
    return (
    <>
    <div className="navbar">
      <img
        alt="logo"
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      <h1>setu's keep note</h1>
    </div>
    </>);
       
}

export default Header;