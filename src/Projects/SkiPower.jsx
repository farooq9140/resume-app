import Header from "../SharedComps/Header.jsx";
import React from "react";
import "../App.css";
import Bottom from "../SharedComps/Bottom.jsx";
import { motion } from "framer-motion";
import "swiper/css/bundle"; // Import Swiper styles

function SkiPower() {
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
          Ski Power
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
          <swiper-slide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
              <img src="/SKI0.png" alt="Slide 1" style={{ padding: "75px", height:"600px" }} />
            </div>
          </swiper-slide>
          <swiper-slide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
              <img src="/SKI1.png" alt="Slide 2" style={{ padding: "75px" , height:"600px"}} />
            </div>
          </swiper-slide>
          <swiper-slide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
              <img src="/SKI2.png" alt="Slide 3" style={{ padding: "75px", height:"500px" }} />
            </div>
          </swiper-slide>
          <swiper-slide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
              <img src="/SKI3.png" alt="Slide 4" style={{ padding: "75px", height:"600px" }} />
            </div>
          </swiper-slide>
          <swiper-slide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
              <video controls style={{ padding: "75px", height:"600px" }}>
                <source src="/SKI_VID.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
          As part of a collaborative team effort, we developed the SkiPower
          Tracker, a Nordic skiing application that harnesses the capabilities
          of a load cell sensor, an IMU (Inertial Measurement Unit), a
          microcontroller, and a GPS sensor. The primary goal of this project
          was to revolutionize the skiing experience by accurately capturing
          skiing data.
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
            Data Capture:
          </span>
          Our team successfully integrated multiple sensors to capture precise
          skiing data, including power measurements, balance, speed, and
          distance.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            Data Processing:
          </span>{" "}
          Utilizing React Native, we implemented advanced algorithms for data
          analysis and interpretation. This enabled us to provide users with
          comprehensive insights into their skiing performance.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            GPS Integration:
          </span>{" "}
          The app includes GPS functionality to record skiing routes and
          locations, enhancing the user's overall skiing experience.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            Performance Metrics:
          </span>
          SkiPower Tracker presents detailed performance metrics, allowing users
          to monitor their progress and make data-driven improvements in their
          skiing technique.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            Mapping and Navigation:
          </span>{" "}
          Our app features built-in mapping and navigation tools to help users
          plan and explore new skiing trails.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            User-Friendly Interface:
          </span>
          The SkiPower Tracker app is designed with a user-friendly interface,
          making it easy to set up, sync with sensors, and view skiing data. The
          SkiPower Tracker project represents a successful collaboration in the
          field of sports technology, bringing together hardware and software
          expertise to enhance the Nordic skiing experience. The app's
          development involved sensor integration, algorithm design, and a focus
          on providing valuable insights to users.
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
              React Native
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
              IMU
            </div>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#BFC3FD",
                borderRadius: "10px",
                paddingInline: "12.5px",
                margin: "2.5px",
                padding: "5px",
              }}
            >
              Microcontroller
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
              href="https://github.com/farooq9140/Ski-Power"
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

export default SkiPower;
