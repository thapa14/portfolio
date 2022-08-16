import React from "react";
import "./App.css";
import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";
import ThingsIlove from "../ThingsIlove/ThingsIlove";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
        <Navigation />
        <Home />
        <ThingsIlove />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
          </>
  );
}

export default App;
