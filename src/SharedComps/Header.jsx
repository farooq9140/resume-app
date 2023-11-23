import React from "react";
import "../App.css";
import { motion} from "framer-motion";
import { HashLink } from "react-router-hash-link";

function Header({ backgroundColor = "#24305E" }) {
  return (
    <div style={{marginBottom:"60px"}}>
      <div
        className="fixed-div"
        id="header"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="text-style">
          <HashLink to="/#farouq-section" smooth>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
              <h3 style={{ marginTop: "25px", color: "#ECEEFF" }}>
                Farouq HamedAllah
              </h3>
            </motion.div>
          </HashLink>
        </div>
        <div className="text-style-right">
          <HashLink to="/#aboutme-scroll-anchor" smooth>
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
          </HashLink>

          <HashLink to="/#portfolio-scroll-anchor" smooth>
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
          </HashLink>
          
          <HashLink to="/#ContactMe-scroll-anchor" smooth>
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
          </HashLink>
        </div>
      </div>
    </div>
  );
}
export default Header;
