import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Thougths & Ideas</span>
        <span className="headerTitleLg">NOTION</span>
      </div>
      <img
        src="https://img.freepik.com/free-vector/flat-geometric-background_23-2148957201.jpg?t=st=1651897075~exp=1651897675~hmac=93a52e8927f74b9910f42593201196310bfef21355437583b81b8d968846a028&w=900"
        alt=""
        className="headerImg"
      />
    </div>
  );
}

export default Header;
