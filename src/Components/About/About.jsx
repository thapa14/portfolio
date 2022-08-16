import React from "react";
import "./About.css";
import thumbnail from "../../images/me-thumbnail.JPG";

function About() {
  return (
    <div className="about-wrapper" id="about" name="about">
      <div className="container">
        <h1 className=" text-clr display-4 text-center fw-bolder text-capitalize my-5">
          About Me
        </h1>
        <div className="about d-flex justify-content-between">
          <div className="about-img">
            <img className="img-thumbnail" src={thumbnail} alt="img" />
          </div>
          <div className="about-details">
            <p>
              Hi, I'm Pankaj Thapa, a self-taught FrontEnd developer from India.
              I have learned everything online. I am a fresher but i have made
              many projects to practice.
            </p>
          </div>
          <div className="background-container"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
