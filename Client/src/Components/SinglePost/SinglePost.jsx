import React from "react";
import "./singlePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?w=900&t=st=1651915406~exp=1651916006~hmac=89f8992bbd000dd6a5079cb552cab5a8abad95a0a741537a3adf1bd0f2a56204"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          This is the title
          <div className="singlePostEdit">
            <i className="far fa-edit"></i>
            <i className="far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Himanshu</span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
          accusantium quo expedita modi? Expedita, dolorem reprehenderit a
          labore, atque nam quae deleniti possimus vel soluta neque magnam, ea
          vero laudantium. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Id accusantium quo expedita modi? Expedita, dolorem
          reprehenderit a labore, atque nam quae deleniti possimus vel soluta
          neque magnam, ea vero laudantium. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Id accusantium quo expedita modi?
          Expedita, dolorem reprehenderit a labore, atque nam quae deleniti
          possimus vel soluta neque magnam, ea vero laudantium. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Id accusantium quo
          expedita modi? Expedita, dolorem reprehenderit a labore, atque nam
          quae deleniti possimus vel soluta neque magnam, ea vero laudantium.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
          accusantium quo expedita modi? Expedita, dolorem reprehenderit a
          labore, atque nam quae deleniti possimus vel soluta neque magnam, ea
          vero laudantium. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Id accusantium quo expedita modi? Expedita, dolorem
          reprehenderit a labore, atque nam quae deleniti possimus vel soluta
          neque magnam, ea vero laudantium. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Id accusantium quo expedita modi?
          Expedita, dolorem reprehenderit a labore, atque nam quae deleniti
          possimus vel soluta neque magnam, ea vero laudantium. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Id accusantium quo
          expedita modi? Expedita, dolorem reprehenderit a labore, atque nam
          quae deleniti possimus vel soluta neque magnam, ea vero laudantium.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
