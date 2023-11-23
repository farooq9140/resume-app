import "./App.css";
import React from "react";
import ProjectCard from "./Projects/ProjectCard";

function AboutMe() {
  return (
    <div className="full-width-div">
      <div className="centered-div" style={{ backgroundColor: "#ECEEFF" }}>
        <h1
          style={{
            color: "#24305E",
            marginBottom: "50px",
            marginTop: "25px",
            fontSize: "36px",
          }}
        >
          My projects
        </h1>
        <div className="projects-container">
          <ProjectCard
            project={{
              title: "Simple Delivery",
              date: "09/2022 - 12/2022",
              description:
                "Simple Delivery Tracker is an intuitive Android application that enhances the delivery experience by seamlessly integrating with a smart mailbox solution.",
              image: "/SimpleDelivery.png", // Provide the path to your image,
              tools: ["Java", "Android studio", "Firebase", "Arduino"],
              link: "/SimpleDelivery",
            }}
          />

          <ProjectCard
            project={{
              title: "Ski Power",
              date: "09/2021 - 05/2022",
              description:
                "Ski power, a Nordic application tracking skiing performance, that harnesses the capabilities of a load cell sensor, an IMU, a microcontroller, and a GPS sensor. ",
              image: "/Ski_Power.png", // Provide the path to your image,
              tools: ["React Native", "IMU", "Microcontroller"],
              link: "/SkiPower",
            }}
          />

          <ProjectCard
            project={{
              title: "Hovercraft",
              date: "01/2021 - 05/2021",
              description:
                "In a remarkable engineering endeavor, our team designed and successfully implemented an autonomous hovercraft that showcased unparalleled navigation capabilities.",
              image: "/HoverCraft.png", // Provide the path to your image,
              tools: ["Coppeliasim", "Arduino"],
              link: "/Hovercraft",
            }}
          />
        </div>

        <div
          className="projects-container"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <ProjectCard
            project={{
              title: "School Portal",
              date: "06/2022 - 08/2022",
              description:
                "During my internship at SquareOne Technologies, I contributed to the development of a comprehensive school portal that significantly improved the educational experience.  ",
              image: "/SchoolPortal.png", // Provide the path to your image,
              tools: ["Mendix", "Java", "SQL", "CSS"],
              link: "/SchoolPortal",
            }}
          />

          <ProjectCard
            project={{
              title: "Robot drawing and testing",
              date: "01/2022 - 04/2022",
              description:
                "This project aimed to create a versatile system that could control a robot's movement and drawing on an XY plane. It excels in thorough testing, ensuring functionality, accuracy, and reliability.",
              image: "/Robot.png", // Provide the path to your image,
              tools: ["Python", "JaCoCo"],
              link: "/Robot",
            }}
          />

          <ProjectCard
            project={{
              title: "Peer to Peer File System",
              date: "09/2021 - 12/2021",
              description:
                "This project aimed to create a communication system for sharing text files among multiple clients and a central server, with the objective of enabling the sharing of text files between connected clients. ",
              image: "/p2p.png", // Provide the path to your image,
              tools: ["Python","Multi-Threading","PySimpleGUI"],
              link: "/p2p",
            }}
          />
        </div>

        <div className="projects-container" style={{ marginBottom: "50px",  flex: "1 1 100%", justifyContent: "flex-start" }}>
        <ProjectCard
            project={{
              title: "FitLife Coach",
              date: "Ongoing",
              description:
                "FitLife Coach is your personal fitness companion, designed to help you achieve your health and fitness goals with ease.",
              image: "/FitLife.png", // Provide the path to your image,
              tools: ["React Native","Firebase","ChatGPT"],
              link: "/FitLife",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
