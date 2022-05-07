import React from "react";
import "./Navbar.css";

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
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
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
