import React from "react";
import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?t=st=1651905640~exp=1651906240~hmac=f3f21e13b7be145e741e4958ddaa9af5347f444f80d1f008fd0871c0981bba46&w=900"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">This is the title of Blog</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae porro
        itaque fugit dolorum quaerat amet, possimus totam repudiandae suscipit
        dicta delectus quae a, quod veniam, veritatis inventore. Quo, odio
        reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae porro itaque fugit dolorum quaerat amet, possimus totam
        repudiandae suscipit dicta delectus quae a, quod veniam, veritatis
        inventore. Quo, odio reiciendis! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Vitae porro itaque fugit dolorum quaerat amet,
        possimus totam repudiandae suscipit dicta delectus quae a, quod veniam,
        veritatis inventore. Quo, odio reiciendis! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Vitae porro itaque fugit dolorum quaerat
        amet, possimus totam repudiandae suscipit dicta delectus quae a, quod
        veniam, veritatis inventore. Quo, odio reiciendis!
      </p>
    </div>
  );
}

export default Post;
