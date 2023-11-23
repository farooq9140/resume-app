import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { motion, useScroll } from "framer-motion";
import ContactMe from "./ContactMe";
import AboutMe from "./AboutMe.jsx";
import Particles_Background from "./Particles_Background.jsx";
import Header from "./SharedComps/Header.jsx";
import Bottom from "./SharedComps/Bottom.jsx";

function App() {
  const { scrollYProgress } = useScroll();

  const [headerBackgroundColor, setHeaderBackgroundColor] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 950) {
        setHeaderBackgroundColor("#24305E"); // Change to your desired background color
      } else {
        setHeaderBackgroundColor(""); // Change to your original background color
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{fontFamily:"monospace", fontSize:"1.05em"}}>
      <div className="progress-container">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      <Particles_Background/>

      <div style={{ height: "100vh" }}>

        <Header backgroundColor={headerBackgroundColor}/>

        <div className="ScreenCentered-div" id="farouq-section">
          <div className="circular-image">
            <img src="/zoro.jpeg" alt="zoro" className="circular-image" />
          </div>
          <h1 style={{ color: "#ECEEFF" }}>Farouq HamedAllah</h1>
          <h2
            style={{ marginTop: "5px", marginBottom: "10px", color: "#ECEEFF" }}
          >
            Developer
          </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="https://www.linkedin.com/in/farouq-hamedallah/"
              target="_blank"
            >
              <img
                src="/linkedin-logo.webp"
                alt="LinkedIn"
                width="40"
                height="40"
                style={{ marginRight: "5px" }}
              />
            </a>
            <a href="https://github.com/farooq9140" target="_blank">
              <img
                src="/github-logo.webp"
                alt="GitHub"
                width="40"
                height="40"
                style={{ marginRight: "5px", borderradius: "10px" }}
              />
            </a>
            <a href="mailto:farouq.hamedallah@outlook.com">
              <img
                src="/mail-logo.png"
                alt="Email"
                width="40"
                height="40"
                style={{ marginRight: "5px", borderradius: "10px" }}
              />
            </a>
          </div>
        </div>
      </div>

      <div id="aboutme-scroll-anchor" style={{ marginBottom: "50px" }}></div>
      <div className="full-width-div2">
        <div
          className="centered-divv"
          id="aboutMe-section"
          style={{ paddingTop: "75px", paddingBottom: "75px" }}
        >
          <h3
            style={{
              color: "white",
              color: "#24305E",
              fontWeight: "bold",
              fontSize: "24px",
              marginBottom: "20px",
            }}
          >
            Hey!
          </h3>
          <h4
            style={{
              color: "white",
              color: "#24305E",
              fontSize: "20px",
            }}
          >
            I'm Farouq HamedAllah!
          </h4>
          <h4
            style={{
              color: "white",
              color: "#24305E",
              fontSize: "20px",
            }}
          >
            A Computer Engineering graduate from Concordia University in
            Montreal, Canada,
          </h4>
          <h4
            style={{
              color: "white",
              color: "#24305E",
              fontSize: "20px",
            }}
          >
            I love programming, as well as bodybuilding, sports, and learning
            new things!
          </h4>
          <h4
            style={{
              color: "white",
              color: "#24305E",
              fontSize: "20px",
            }}
          >
            Feel free to get in touch or take a look at my past work below.
          </h4>
        </div>
      </div>

      <div id="portfolio-scroll-anchor" style={{ marginTop: "300px" }}></div>
      <div className="portfolio-banner">
        <div className="centered-div2">
          <h1 style={{ marginBottom: "50px", color: "#ECEEFF" }}>Portfolio</h1>
        </div>
      </div>

      <AboutMe />
      <ContactMe />

      <div id="ContactMe-scroll-anchor" style={{ marginTop: "50px" }}></div>
      <Bottom/>
    </div>
  );
}
export default App;
