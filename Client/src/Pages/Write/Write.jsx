import React from "react";
import "./write.css";

function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?t=st=1651984155~exp=1651984755~hmac=eb93585ac37f51f3c7e52dd5e56a847ca29e198accab3cf61c07fe6c9833c551&w=996"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="fas fa-plus writeIcon"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            id="title"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell Your Story....."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
