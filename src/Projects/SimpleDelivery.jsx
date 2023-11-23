import Header from "../SharedComps/Header.jsx";
import "../App.css";
import Bottom from "../SharedComps/Bottom.jsx";
import { motion} from "framer-motion";
import { register } from "swiper/element/bundle";
import "swiper/css/bundle"; // Import Swiper styles
import React from "react";

register(); // Register Swiper custom elements
function SimpleDelivery() {
  const buttonVariants = {
    hover: {
      scale: 1.01,
      y: -6, // Move 10 pixels up
    },
  };

  return (
    <div className="fullscreen-div" style={{fontFamily:"monospace", fontSize:"1.05em"}}>
      <Header />
      <div className="flex flex-col items-center justify-center h-auto">
        <h1
          style={{
            marginTop: "30px",
            fontWeight: "bold",
            marginBottom: "20 px",
          }}
        >
          Simple Delivery
        </h1>
        <swiper-container
          slides-per-view="1"
          speed="500"
          loop="true"
          style={{ width: "1300px" }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }} 
        >
          <swiper-slide>
            <div>
              <video controls style={{padding:"75px"}}>
                <source src="/Simply_delivered.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <img src="/SD1.png" alt="Slide 2" style={{padding:"75px"}}/>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <img src="/SD2.png" alt="Slide 3"style={{padding:"75px"}} />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <img src="/SD3.png" alt="Slide 4" style={{padding:"75px"}} />
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
          Simple Delivery Tracker is an intuitive Android application that
          enhances the delivery experience by seamlessly integrating with a
          smart mailbox solution. Our collaborative effort has resulted in a
          powerful app designed to provide users with real-time delivery
          notifications and mailbox status updates, ensuring their packages
          arrive safely and securely.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          Our collaborative effort has resulted in a powerful app designed to
          provide users with real-time delivery notifications and mailbox status
          updates, ensuring their packages arrive safely and securely.
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
            Real-time Delivery Updates:
          </span>
          Simple Delivery Tracker keeps you informed every step of the way. Get
          instant notifications about the status of your deliveries, from the
          moment they're dispatched to when they arrive in your smart mailbox.{" "}
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            Enhanced Security:
          </span>{" "}
          We've implemented a robust lock feature within the app to bolster
          security and control access to your smart mailbox. This innovative
          addition has led to a remarkable 20% reduction in package theft
          incidents, giving you peace of mind about the safety of your
          deliveries.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            Backend Powered by Firebase:
          </span>{" "}
          To ensure the efficient management of user information and delivery
          data, Simple Delivery Tracker relies on Firebase as its trusted
          backend database. This technology backbone helps maintain the
          integrity of your data and ensures a seamless user experience.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            Reliable Wi-Fi Connectivity:
          </span>
          We've established a dependable Wi-Fi connection between the app and
          the smart mailbox hardware. This connection facilitates efficient
          communication, guaranteeing that your delivery updates are always
          accurate and timely. Say goodbye to guesswork when it comes to your
          packages.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            User-Friendly Interface:
          </span>{" "}
          Our app boasts a user-friendly interface designed to make tracking
          deliveries a breeze. You don't need to be tech-savvy to use it –
          simply open the app and stay in the know about your deliveries.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            Optimized User Experience:
          </span>
          Our focus on efficiency and ease of use ensures that Simple Delivery
          Tracker provides an optimized user experience. You'll love how
          effortlessly you can stay updated on your deliveries. With Simple
          Delivery Tracker, you're in control. Say goodbye to missed deliveries,
          uncertain package whereabouts, and package theft. Download the app now
          and enjoy the peace of mind that comes with knowing your deliveries
          are secure and within reach. Deliveries made simple, just as they
          should be.
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
              Java
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
              Android studio
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
              Firebase
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

export default SimpleDelivery;
