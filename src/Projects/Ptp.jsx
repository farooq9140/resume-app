import Header from "../SharedComps/Header.jsx";
import React from "react";
import "../App.css";
import Bottom from "../SharedComps/Bottom.jsx";
import { motion} from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Ptp() {
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
          Peer to Peer File System
        </h1>
        <Carousel className="crsl" infiniteLoop showThumbs={false}>
          <img src="/p2p1.png" alt="Slide 2" />
          <img src="/ptp2.png" alt="Slide 2" />
          <img src="/ptp3.png" alt="Slide 2" />
          <img src="/ptp4.png" alt="Slide 2" />
          <img src="/ptp5.png" alt="Slide 2" />
        </Carousel>

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
          The Peer-to-Peer File System project focused on the development of a
          peer-to-peer communication system, comprising multiple clients and a
          central server, with the primary objective of enabling the sharing of
          text files between connected clients.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          The central server served as a pivotal component, maintaining a record
          of registered clients and facilitating seamless communication among
          them. Notably, the project was implemented using the Python
          programming language and featured the creation of a user-friendly
          graphical user interface (GUI) to enhance the overall user experience.
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
          P2P Communication: 
          </span>
          The project emphasized the
        establishment of peer-to-peer communication, eliminating the need for a
        centralized file repository. This decentralized approach promoted direct
        communication and file sharing between clients, enhancing efficiency and
        reducing the load on the central server.{" "}
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Central Server Functionality:
          </span>{" "}
          The central server played a critical role in the project by maintaining
        a registry of all connected clients. It facilitated connections,
        authenticated users, and mediated the exchange of text files. This
        centralized coordination ensured smooth and secure communication. 
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Python Implementation:
          </span>{" "}
          The choice of Python as the primary programming language
        showcased its suitability for network and server-client applications.
        Python's simplicity and versatility made it an ideal choice for this
        project, enabling efficient development and testing. 
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Graphical User
        Interface (GUI):
          </span>
          To improve the user experience, a user-friendly GUI was
        developed, allowing clients to interact with the system easily. The GUI
        simplified the process of sharing files, viewing connections, and
        managing communication settings. The Peer-to-Peer File System project
        highlighted the effectiveness of a decentralized approach to
        communication and file sharing. By utilizing Python and implementing a
        user-friendly GUI, it offered an accessible and efficient solution for
        facilitating peer-to-peer connections and text file sharing among
        multiple clients, promoting secure and direct interactions in a
        user-friendly environment.
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
              Multi-Threading
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
              PySimpleGUI
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
              href="https://github.com/farooq9140/Simple-Delivery"
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

export default Ptp;
