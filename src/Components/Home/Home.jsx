import React from "react";
import "./Home.css";
import me from "../../images/me.png";
import blob from "../../images/blob.svg";
import blob2 from "../../images/blob2.svg";
import { useRef } from "react";

function Home() {
  let toHome = useRef(null);
  return (
    <>
      <div className=" container h-wrapper d-flex align-items-center " id="home" ref={toHome}>
        <div className="home">
          <div className="home-left d-flex flex-column gap-1 mb-5">
            <span className=" text-uppercase">Hello, I'am </span>
            <span className=" fw-bold text-uppercase ">
              Pankaj thapa
            </span>
            <span className="fs-2 text-uppercase">front-end web developer</span>
          </div>
          <button className="btn btn-lg  text-uppercase px-4 py-3 fs-4 text-capitalize">
            download resume
          </button>
        </div>

        <img className="h-img" src={me} alt="img" />

        <img className="blob" src={blob} alt="img" />
        <img className="blob2" src={blob2} alt="img" />
        {/* <div className="blur blur-shade-home"></div> */}
      </div>
    </>
  );
}

export default Home;
