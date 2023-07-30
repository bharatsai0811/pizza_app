import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiLogoSnapchat } from "react-icons/bi";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaFacebookF style={{ color: "blue" }} />
        <AiFillInstagram style={{ color: "pink" }} />
        <AiFillLinkedin style={{ color: "blue" }} />
        <BiLogoSnapchat style={{ color: "yellow" }} />
      </div>
      <p>&copy; 2023 bhartsai.com</p>
    </div>
  );
};

export default Footer;
