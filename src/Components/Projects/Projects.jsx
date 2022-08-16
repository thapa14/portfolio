import React from "react";
import "./Projects.css";
import Weather from "../../images/weather-app.png";
import shoppingcart from "../../images/shopping-cart.png";
import nft from "../../images/nft.png";
import data from "./Project-Data";

function Projects() {
  return (
    <div className="projects-wrapper container" id="projects">
      <h1 className="text-clr display-4 text-center fw-bolder text-capitalize my-5">
        My Projects
      </h1>

      <div className="p-area ">
        <div className="row gx-5">

          {
            data.map((value , index) => {
              return(<>
              <div className="col-4 d-flex align-items-center justify-content-center mt-5">
            <a
              className="a-hover"
              href={value.link}
              target="_blank"
            >
              <div className="projects">
                <div className="thumbnail shadow-sm">
                  <img className="p-img" src={value.thumbnail} alt="weather" />
                </div>
                <h2 className="p-name text-capitalize text-center mt-3 mb-0">
                  {value.name}
                </h2>
                <p className="p-about text-center text-secondary">React</p>
              </div>
            </a>
          </div>
              </>
              )
            })
          }


        </div>
      </div>
      <div className="blur blur-project"></div>
    </div>
  );
}

export default Projects;
