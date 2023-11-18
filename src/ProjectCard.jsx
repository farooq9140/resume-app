// ProjectCard.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={project.link} style={{ fontWeight: "normal" }}>
      <Card
        className="max-w-[400px]"
        style={{
          marginRight: "25px",
          backgroundColor: "#ECEEFF",
          boxShadow: "5px 5px 8px #888888",
          height: isHovered ? "auto" : "400px", // Adjust the height value
          overflow: "hidden",
          borderRadius: "2px",
          maxHeight: isHovered ? "450px" : "350px",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          transition={{ duration: 0.3 }}
        >
          <div
            style={{
              position: "relative",
              height: isHovered ? "auto" : "515px",
            }}
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height:"175px"
              }}
            >
              <img
                src={project.image}
                alt="Project Image"
                width="175"
                style={{ borderRadius: "7.5%",marginTop:"20px" }}
              />
            </div>
            <div
              className="flex flex-col"
              style={{
                textAlign: "left",
                paddingInline: "20px",
                marginTop:"10px"
              }}
            >
              <p
                className="text-md"
                style={{
                  color: "#24305E",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                {project.title}
              </p>
              <p
                className="text-small text-default-500 "
                style={{ color: "#24305E" }}
              >
                {project.date}
              </p>
            </div>
            <CardBody>
              <motion.div
                initial={{ opacity: 0, height: "0" }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  height: isHovered ? "auto" : "0",
                }}
                transition={{ duration: 0.4 }}
                style={{ overflow: "hidden" }}
              >
                <p style={{ color: "#24305E" }}>{project.description}</p>
              </motion.div>

              <div style={{ marginTop: "10px" }}>
                {project.tools.map((tool, index) => (
                  <div
                    key={index}
                    style={{
                      display: "inline-block",
                      color: "#ECEEFF",
                      backgroundColor: "#24305E",
                      borderRadius: "10px",
                      marginRight: "2.5px",
                      padding: "5px",
                      paddingInline: "12.5px",
                    }}
                  >
                    {tool}
                  </div>
                ))}
              </div>

              <Link
                to={project.link}
                showAnchorIcon
                style={{ marginTop: "10px" }}
              >
                <h2>Project link for more information</h2>
              </Link>
            </CardBody>
          </div>
        </motion.div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
