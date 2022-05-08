import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/settings"
            >
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/contact"
            >
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/write"
            >
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/logout"
            >
              LOGOUT
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <img
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1651891801~exp=1651892401~hmac=a9387d257607654c7c5934d63cd9621d2ca02cf12194d9521a7546a1e474146c&w=740"
          alt=""
          className="topImg"
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Navbar;
