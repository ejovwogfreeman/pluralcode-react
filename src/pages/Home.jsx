import React from "react";
import img from "../assets/image.png";
import vid from "../assets/video.mp4";

const Home = () => {
  return (
    <div>
      <h1>Hello from Home page</h1>
      <img src={img} alt="" width="100%" />
      <video src={vid} width="100%" controls></video>
    </div>
  );
};

export default Home;
