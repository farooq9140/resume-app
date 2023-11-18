import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from "react";
import "./App.css";
import { motion, useScroll } from "framer-motion";
import ContactMe from "./ContactMe";
import AboutMe from "./AboutMe.jsx";
import { Divider } from "@nextui-org/react";

function App() {
  const { scrollYProgress } = useScroll();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

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

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/CV_Farouq_HamedAllah.pdf"; // Replace with the actual path to your PDF file
    link.target = "_blank"; // Open the link in a new tab/window
    link.download = "CV_Farouq_HamedAllah.pdf"; // Set the filename for the downloaded file

    // Trigger a click event on the link to initiate the download
    link.click();
  };

  return (
    <div>
      <div className="progress-container">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="particles-background"
        options={{
          fullScreen: true,
          background: {
            image: " linear-gradient(19deg, #24305E 100%, grey 0%)",
          },
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 80,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "grab", // Use "grab" or "bubble" for cursor interaction
              },
              onclick: {
                enable: true,
                mode: "repulse", // Optional, for click interaction
              },
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 800,
                size: 80,
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
              repulse: {
                distance: 300,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div style={{ height: "100vh" }}>
        <div
          className="fixed-div"
          id="header"
          style={{ backgroundColor: headerBackgroundColor }}
        >
          <div className="text-style">
            <a
              href="#farouq-section"
              className="smooth-scroll-link"
              style={{ color: "white" }}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
                <h3 style={{ marginTop: "25px", color: "#ECEEFF" }}>
                  Farouq HamedAllah
                </h3>
              </motion.div>
            </a>
          </div>
          <div className="text-style-right">
            <a
              href="#aboutme-scroll-anchor"
              className="smooth-scroll-link"
              style={{ color: "white" }}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
                <h3
                  style={{
                    margin: "0 10px",
                    marginTop: "7px",
                    color: "#ECEEFF",
                  }}
                >
                  About me
                </h3>
              </motion.div>
            </a>
            <a
              href="#portfolio-scroll-anchor"
              className="smooth-scroll-link"
              style={{ color: "white" }}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
                <h3
                  style={{
                    margin: "0 10px",
                    marginTop: "7px",
                    color: "#ECEEFF",
                  }}
                >
                  Portfolio
                </h3>
              </motion.div>
            </a>

            <a
              href="#ContactMe-scroll-anchor"
              className="smooth-scroll-link"
              style={{ color: "white" }}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
                <h3
                  style={{
                    margin: "0 10px",
                    marginTop: "7px",
                    color: "#ECEEFF",
                  }}
                >
                  Contact
                </h3>
              </motion.div>
            </a>
          </div>
        </div>

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
          style={{ paddingTop: "75px", paddingBottom: "75px",}}
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
            A Computer Engineering graduate from Concordia University in Montreal, Canada,
          </h4>
          <h4
            style={{
              color: "white",
              color: "#24305E",
              fontSize: "20px",
            }}
          >
            I love programming, as well as bodybuilding, sports, and
            learning new things!
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

      <div className="bottom-div" style={{ backgroundColor: "#14161E" }}>
        <div className="columnn">
          <div style={{ marginLeft: "700px" }}>
            <div
              style={{
                marginTop: "30px",
                color: "#ECEEFF",
                fontSize: "24px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Site map
            </div>
            <div style={{ color: "#ECEEFF", textAlign: "left" }}>
              <a
                href="#farouq-section"
                className="smooth-scroll-link"
                style={{ color: "white" }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.7 }}
                >
                  <h3 style={{ color: "#646cff", fontWeight: "500" }}>Top</h3>
                </motion.div>
              </a>

              <a
                href="#aboutme-scroll-anchor"
                className="smooth-scroll-link"
                style={{ color: "white" }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.7 }}
                >
                  <h3
                    style={{
                      color: "#646cff",
                      fontWeight: "500",
                    }}
                  >
                    About me
                  </h3>
                </motion.div>
              </a>
              <a
                href="#portfolio-scroll-anchor"
                className="smooth-scroll-link"
                style={{ color: "white" }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.7 }}
                >
                  <h3
                    style={{
                      color: "#646cff",
                      fontWeight: "500",
                    }}
                  >
                    Portfolio
                  </h3>
                </motion.div>
              </a>

              <a
                href="#ContactMe-scroll-anchor"
                className="smooth-scroll-link"
                style={{ color: "white" }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.7 }}
                >
                  <h3
                    style={{
                      color: "#646cff",
                      fontWeight: "500",
                    }}
                  >
                    Contact
                  </h3>
                </motion.div>
              </a>
            </div>
          </div>

          <div>
            <div
              style={{
                marginTop: "30px",
                color: "#ECEEFF",
                fontSize: "24px",
                fontWeight: "bold",
                textAlign: "left",
                marginRight: "700px",
              }}
            >
              Contact me
            </div>
            <div style={{ color: "#ECEEFF", textAlign: "left" }}>
              <h2>
                <a
                  href={`mailto:${"farouq.hamedallah@outlook.com"}`}
                  className="email-button"
                >
                  farouq.hamedallah@outlook.com
                </a>
              </h2>
              <a href={`tel:${+971501796147}`} className="call-button">
                +971 50-1796147
              </a>
              <h2>
                <a href={`tel:${+15146994330}`} className="call-button">
                  +1 (514) 699-4330
                </a>
              </h2>
            </div>
          </div>
        </div>

        <div className="horizontal-line"></div>
        <div className="columnn" style={{ color: "#ECEEFF" }}>
          <h2 style={{ marginLeft: "500px", fontSize: "14px" }}>
            © Copyright 2023. Made by Farouq HamedAllah
          </h2>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
            <h2
              style={{ cursor: "pointer", color: "#646cff", fontWeight: "500" }}
            >
              Site source code
            </h2>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
            <h2
              onClick={handleDownload}
              style={{ cursor: "pointer", color: "#646cff", fontWeight: "500" }}
            >
              My resume
            </h2>
          </motion.div>

          <h2
            style={{
              marginRight: "550px",
              color: "#646cff",
              fontWeight: "500",
            }}
          >
            bodybuilding/personal blog
          </h2>
        </div>
      </div>
    </div>
  );
}
export default App;
