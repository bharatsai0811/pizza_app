import React, { useContext, useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { IoMdReorder } from "react-icons/io";
import { BsFillCartCheckFill } from "react-icons/bs";
import { CartContext } from "../context/cartContext";
const Navbar = () => {
  const [value, setValue] = useState(false);
  const [state] = useContext(CartContext);
  return (
    <div className="navbar">
      <div className="leftSide" id={value ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">
            <BsFillCartCheckFill
              style={{ color: "white" }}
            ></BsFillCartCheckFill>

            {state.cart.length}
          </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <BsFillCartCheckFill style={{ color: "white" }}></BsFillCartCheckFill>

          {state.cart.length}
        </Link>
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
