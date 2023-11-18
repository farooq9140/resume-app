import Header from "./Header.jsx";
import React from "react";
import "./App.css";
import Bottom from "./Bottom.jsx";
import { motion, useScroll } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function SchoolPortal() {
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
            marginBottom: "20px",
          }}
        >
          School Portal
        </h1>

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
          During my internship at SquareOne Technologies, I had the privilege of
        contributing to the development of a comprehensive school portal that
        significantly improved the educational experience. 
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          This project
        encompassed the creation of a user-friendly Mendix app and website,
        serving as a vital platform for teachers, parents, and guests within the
        educational community.
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
          Seamless Communication:
          </span>
          The school portal was designed
        to promote seamless communication between teachers, parents, and the
        educational institution. It offered features such as messaging systems,
        event notifications, and real-time updates to foster collaboration and
        enhance the learning environment.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Efficient Administrative Tasks:
          </span>{" "}
          My
        role involved actively implementing essential functionalities that
        streamlined administrative tasks. This included features for managing
        student records, class schedules, attendance, and grade tracking,
        simplifying the daily workflow for teachers and administrators.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Guest-Friendly Enrollment:
          </span>{" "}
          The portal extended its usability to guests,
        simplifying the enrollment process for new students and providing easy
        access to essential school information. This feature enhanced
        accessibility and the onboarding experience for prospective students and
        parents. 
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Technology-Driven Solutions:
          </span>
          The project exemplified a
        commitment to using technology-driven solutions to improve educational
        processes. Leveraging my skills in Mendix, CSS, SQL, and Java, we
        harnessed the power of modern technology to create an innovative
        platform that met the diverse needs of the educational community. The
        School Portal Development project underscored the importance of
        technology in enhancing the educational experience. It provided a
        user-friendly, all-in-one platform that improved communication,
        streamlined administrative tasks, and extended its benefits to guests,
        ultimately contributing to the advancement of educational processes and
        community collaboration.
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
              Mendix
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
              Java
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
             SQL
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
              CSS
            </div>
          </div>
        </div>
        <div
          className="flex justify-left" // Center the content
          style={{ width: "750px", marginTop: "30px", marginBottom: "20px" }}
        >
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default SchoolPortal;
