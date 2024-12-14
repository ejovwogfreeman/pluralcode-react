import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaHome, FaServicestack } from "react-icons/fa";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
  return (
    <nav>
      <h1>ReactWeb</h1>
      <ul>
        <Link to="/">
          <FaHome /> <span>Home</span>
        </Link>
        <Link to="/about">
          <MdOutlineRoundaboutLeft />
          <span>About</span>
        </Link>
        <Link to="/contact">
          <IoMdContact />
          <span>Contact</span>
        </Link>
        <Link to="/services">
          <FaServicestack />
          <span>Services</span>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
