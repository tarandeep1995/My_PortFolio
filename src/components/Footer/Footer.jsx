import React from "react";
import "./Footer.css";
import img from './Untitled Project.jpg'

const Footer = () => {
  return (
    <div className="footer" style={{ width: "200%", position: 'absolute',
    height: 'auto'}}>
      <img src={img} alt="" />
    </div>
  );
};

export default Footer;

