import React, { useState } from "react";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

 

  return (
    <div
      style={{
        position: "relative",
        marginTop: "1300px",
      }}
    >
      <h1 style={{ color: "#ECEEFF", paddingTop:"100px"}}>Contact Me</h1>
      <h2 style={{ color: "#ECEEFF" , paddingTop:"20px"}}>
        Feel free to Contact me by submitting the form below and
      </h2>
      <h2 style={{ color: "#ECEEFF"}}> I will get back
        to you as soon as possible</h2>
      <div style={{ backgroundColor: "#ECEEFF" , marginTop:"30px"}}>
        <form onSubmit={handleSubmit}>
          <div style={{paddingTop:"20px" , display: "block", paddingLeft:"20px"}}>
            <label htmlFor="name" style={{ color: "#24305E", display: "flex", alignItems: "center" }}>
              Name 
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              
              required
              style={{
                color: "#4C5486", // Text color
                backgroundColor: "#CACEFF", // Background color
                border: "1px solid #666", // Border color
                padding:"5px",
                // You can add more CSS properties as needed
                display: "block",
                width: "90%"
              }}
            />
          </div>
          <div style={{paddingTop:"20px" , display: "block", paddingLeft:"20px"}}>
            <label htmlFor="email" style={{ color: "#24305E", display: "flex", alignItems: "center" }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your Email"
              style={{
                color: "#4C5486", // Text color
                backgroundColor: "#CACEFF", // Background color
                border: "1px solid #666", // Border color
                padding:"5px",
                // You can add more CSS properties as needed
                display: "block",
                width: "90%"
              }}
            />
          </div>
          <div style={{paddingTop:"20px" , display: "block", paddingLeft:"20px"}}>
            <label htmlFor="message" style={{ color: "#24305E", display: "flex", alignItems: "center" }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              placeholder="Enter your message"
              style={{
                color: "#4C5486", // Text color
                backgroundColor: "#CACEFF", // Background color
                border: "1px solid #666", // Border color
                padding:"5px",
                // You can add more CSS properties as needed
                display: "block",
                width: "90%"
              }}
            />
          </div>
          <button type="submit" style={{ color: "#ECEEFF", margin:"20px",backgroundColor:"#565E91"}} >
            Submit
          </button>
        </form>
      </div>

    </div>
  );
}

export default ContactMe;
