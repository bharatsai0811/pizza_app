import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { IoMdReorder } from "react-icons/io";
const Navbar = () => {
  const [value, setValue] = useState(false);
  return (
    <div className="navbar">
      <div className="leftSide" id={value ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>

          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>

        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button
          onClick={() => {
            setValue((value) => !value);
          }}
        >
          <IoMdReorder style={{ color: "white" }}></IoMdReorder>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
