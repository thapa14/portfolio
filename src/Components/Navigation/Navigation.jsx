import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll"
import Home from "../Home/Home";


function Navigation() {

  // const scrollToHome = () => {
  //   window.scrollTo({
  //     top: toHome.current.offsetTop,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <>
      <div className="n-wrapper pad d-flex justify-content-between align-items-center shadow">
        <div className="n-left">
          <a className="fw-bold fs-2 text-uppercase" href="#">Thapa</a>
        </div>

        <div className="n-right d-flex align-items-center">
          <div className="navbars">
            <ul className="d-flex flex-row m-0">
              {/* <Link spy="true"  to="home"  activeClass="activeClass">
              <li>home</li>
              </Link>
              <Link spy="true"  to="about"  activeClass="activeClass">
              <li>about</li>
              </Link>
              <Link spy="true"  to="projects" activeClass="activeClass" >
              <li>projects</li>
              </Link>
              <Link spy="true"  to="contact"  activeClass="activeClass">
              <li>contact me</li>
              </Link>
               */}

               <li>Home</li>
               <li>about</li>
               <li>projects</li>
               <li>contact</li>
            </ul>
          </div>
          <div>toggle</div>
        </div>

      </div>
    </>
  );
}

export default Navigation;
