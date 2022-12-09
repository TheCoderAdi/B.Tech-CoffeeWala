import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillGoogleCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logos">
        <AiFillGoogleCircle />
        <AiFillFacebook />
        <AiFillInstagram />
      </div>
      <h4>Made By Aditya &copy;2022</h4>
    </div>
  );
};

export default Footer;
