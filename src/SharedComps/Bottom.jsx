import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

function Bottom() {
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
            <HashLink to="/#farouq-section" smooth>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
                <h3 style={{ color: "#646cff", fontWeight: "500" }}>Top</h3>
              </motion.div>
            </HashLink>

            <HashLink to="/#aboutme-scroll-anchor" smooth>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
                <h3
                  style={{
                    color: "#646cff",
                    fontWeight: "500",
                  }}
                >
                  About me
                </h3>
              </motion.div>
            </HashLink>

            <HashLink to="/#portfolio-scroll-anchor" smooth>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
                <h3
                  style={{
                    color: "#646cff",
                    fontWeight: "500",
                  }}
                >
                  Portfolio
                </h3>
              </motion.div>
            </HashLink>

            <HashLink to="/#ContactMe-scroll-anchor" smooth>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
                <h3
                  style={{
                    color: "#646cff",
                    fontWeight: "500",
                  }}
                >
                  Contact
                </h3>
              </motion.div>
            </HashLink>
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
          <a href="https://github.com/farooq9140/resume-app" target="_blank">
            <h2
              style={{ cursor: "pointer", color: "#646cff", fontWeight: "500" }}
            >
              Site source code
            </h2>
          </a>
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
  );
}
export default Bottom;
