import React from "react";
import tv from "../../../assets/tv.jpg";
import video from "../../../assets/tv.mp4";


const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <h1>Enjoy on your TV</h1>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast,</p>
          <p>Apple TV, Blu-ray players and more.</p>
        </div>
        <div className="about-image">
          <img src={tv} alt="" />
          <video src={video} autoPlay loop muted></video>
         
        </div>
      </div>
      <hr className="divider" />
    </>
  );
};

export default About;
