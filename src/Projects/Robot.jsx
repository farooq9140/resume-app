import Header from "../SharedComps/Header.jsx";
import React from "react";
import "../App.css";
import Bottom from "../SharedComps/Bottom.jsx";
import { motion} from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Robot() {
  const buttonVariants = {
    hover: {
      scale: 1.01,
      y: -6, // Move 10 pixels up
    },
  };

  return (
    <div className="fullscreen-div">
      <Header />
      <div className="flex flex-col items-center justify-center h-auto">
        <h1
          style={{
            marginTop: "30px",
            fontWeight: "bold",
            marginBottom: "20 px",
          }}
        >
          Robot drawing and testing
        </h1>
        
        <swiper-container
          slides-per-view="1"
          speed="500"
          loop="true"
          style={{ width: "1100px" }}
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
                src="/robot0.png"
                alt="Slide 1"
                style={{ padding: "75px" }}
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
                src="/robot1.png"
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
                src="/robot2.png"
                alt="Slide 3"
                style={{ padding: "75px" }}
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
                src="/robot3.png"
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
          In collaboration with Team WIJ#3, we developed a Python-based Robot
        Drawing and Movement Program for COEN 448. This project aimed to create
        a versatile system that could control a robot's movement and drawing on
        an XY plane. 
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          It excels in thorough testing, ensuring the program's
        functionality, accuracy, and reliability.
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
          Comprehensive Testing: 
          </span>
          The project places a significant
        emphasis on testing, covering various dimensions such as statement
        coverage, decision coverage, condition coverage, and multiple condition
        coverage. This rigorous testing approach guarantees that the program
        operates as expected and is free of errors. 
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Data Capture: 
          </span>{" "}
          The program
        captures precise data related to the robot's movement, pen position, and
        direction, allowing for the creation of drawings and patterns on a grid.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Robot Commands:
          </span>{" "}
          Users can control the robot's movement, pen status (up
        or down), and orientation through a set of commands, including move (M),
        turn (R/L), pen up (U), pen down (D), print (P), and quit (Q). 
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Drawing
        and Movement: 
          </span>
          The robot can lower its pen to draw while moving, enabling
        the creation of intricate designs on the grid. It can also navigate the
        XY plane following specified commands. 
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Error Handling:
          </span>{" "}
          The program
        effectively handles invalid input commands and provides feedback for
        non-valid actions. 
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Code Analysis:
          </span>
          Code analysis includes function
        coverage, statement coverage, path coverage, condition coverage, and
        line coverage to ensure code quality. The Robot Drawing and Movement
        Program project showcases our collaborative effort in developing a
        versatile system that controls robot movement and drawing on an XY
        plane. Its robust testing procedures and comprehensive code analysis
        make it a reliable and accurate tool for various applications, from art
        creation to educational programming.
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
              Python
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
              JaCoCo
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
              href="https://github.com/farooq9140/COEN-448---3"
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

export default Robot;
