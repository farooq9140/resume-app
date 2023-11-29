import Header from "../SharedComps/Header.jsx";
import React from "react";
import "../App.css";
import Bottom from "../SharedComps/Bottom.jsx";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Hovercraft() {
  const buttonVariants = {
    hover: {
      scale: 1.01,
      y: -6, // Move 10 pixels up
    },
  };

  return (
    <div className="fullscreen-div"  style={{fontFamily:"monospace", fontSize:"1.05em"}}>
      <Header />
      <div className="flex flex-col items-center justify-center h-auto">
        <h1
          style={{
            marginTop: "30px",
            fontWeight: "bold",
            marginBottom: "20 px",
          }}
        >
          Hovercraft
        </h1>

        <swiper-container
          slides-per-view="1"
          speed="500"
          loop="true"
          style={{ width: "750px" }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
        >
          <swiper-slide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/HC0.png"
                alt="Slide 1"
                style={{ padding: "75px", height: "600px",width:"550px" }}
              />
            </div>
          </swiper-slide>
          <swiper-slide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/HC2.png"
                alt="Slide 2"
                style={{ padding: "75px"}}
              />
            </div>
          </swiper-slide>
          <swiper-slide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/HC4.png"
                alt="Slide 3"
                style={{ padding: "75px" }}
              />
            </div>
          </swiper-slide>
        </swiper-container>

        <h2
          className="text-left"
          style={{ fontWeight: "bold", fontSize: "28px", width: "750px" }}
        >
          Project Overview
        </h2>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          In a remarkable engineering endeavor, our team designed and
          successfully implemented an autonomous hovercraft that showcased
          unparalleled navigation capabilities.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          This cutting-edge project combined Coppeliasim simulation technology
          with Arduino programming, resulting in an autonomous hovercraft that
          could navigate through a variety of challenging tracks.
        </h3>
        <h2
          className="text-left"
          style={{
            fontWeight: "bold",
            fontSize: "28px",
            marginTop: "20px",
            width: "750px",
          }}
        >
          Key Features
        </h2>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", margin: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            Navigation Excellence:
          </span>
          The autonomous hovercraft demonstrated exceptional navigation skills,
          effortlessly tackling diverse tracks and terrains. This achievement
          was made possible through advanced algorithms and precise control
          systems.{" "}
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            Competition Success:
          </span>{" "}
          Our project gained recognition in a highly competitive Hovercraft
          Design and Implementation competition, where we competed against over
          30 teams. Our autonomous hovercraft's innovative design and
          outstanding performance earned us the Third Place Award.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            Engineering Innovation:
          </span>{" "}
          The success of our autonomous hovercraft project underscores our
          team's commitment to pushing the boundaries of autonomous technology
          and engineering innovation. It represents a culmination of technical
          expertise and creative problem-solving.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            Robust Sensor Integration:
          </span>
          The autonomous hovercraft's success was greatly attributed to the
          meticulous integration of a range of sensors, including distance
          sensors, inertial sensors, and obstacle detection systems. These
          sensors enabled precise real-time data collection, contributing to its
          remarkable navigation capabilities.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            Adaptive Control Algorithms:
          </span>{" "}
          The project featured state-of-the-art control algorithms that allowed
          the hovercraft to adapt to changing terrains and obstacles, making it
          capable of navigating diverse tracks with agility and efficiency.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            Safety Features:
          </span>
          Safety was a paramount concern in the project. The hovercraft
          incorporated safety features such as emergency braking and obstacle
          avoidance mechanisms to ensure safe operation in real-world scenarios.
        </h3>

        <div style={{ width: "750px" }}>
          <h2
            className="text-left"
            style={{
              fontWeight: "bold",
              fontSize: "28px",
              marginTop: "20px",
            }}
          >
            Tools Used
          </h2>

          <div style={{ marginTop: "15px" }} className="text-left">
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#BFC3FD",
                borderRadius: "10px",
                marginRight: "2.5px",
                padding: "5px",
                paddingInline: "12.5px",
              }}
            >
              Coppeliasim
            </div>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#BFC3FD",
                borderRadius: "10px",
                margin: "2.5px",
                padding: "5px",
                paddingInline: "12.5px",
              }}
            >
              Arduino
            </div>
          </div>
        </div>
        <div
          className="flex justify-left" // Center the content
          style={{ width: "750px", marginTop: "30px", marginBottom: "20px" }}
        >
          <motion.div whileHover="hover">
            <motion.a
              variants={buttonVariants}
              className="text-center"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#F7F8FF",
                backgroundColor: "#708AF4",
                border: "1px solid #24305E",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow: "5px 5px 10px #888888",
              }}
              href="https://github.com/farooq9140/Hovercraft-Project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Link
            </motion.a>
          </motion.div>
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default Hovercraft;
