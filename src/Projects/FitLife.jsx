import Header from "../SharedComps/Header.jsx";
import React from "react";
import "../App.css";
import Bottom from "../SharedComps/Bottom.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function FitLife() {
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
          FitLife Coach
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
          FitLife Coach is your personal fitness companion, designed to help you
        achieve your health and fitness goals with ease. This innovative React
        Native app is the ideal solution for individuals looking to embark on
        their fitness journey. 
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
         Whether you're new to the world of fitness or a
        seasoned pro, FitLife Coach is here to provide you with a tailored
        workout and nutrition plan that perfectly aligns with your unique needs
        and goals.
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
          Personalized Fitness Plan:
          </span>
          Begin by telling FitLife Coach
        about yourself. Enter your age, current fitness level, desired goals,
        and the type of training you prefer. Our intelligent algorithms will
        analyze this information to create a customized workout plan just for
        you.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Curated Workout Plan: 
          </span>{" "}
          Say goodbye to cookie-cutter workout
        routines. FitLife Coach generates a weekly workout plan, complete with
        exercises, sets, reps, and rest intervals, all tailored to your fitness
        level and objectives.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Nutrition Guidance:
          </span>{" "}
          Achieving your fitness goals
        is not just about exercise – it's also about what you eat. This app
        provides a curated meal plan for the entire week. It specifies each
        meal's content, including the number of calories, protein, carbs, and
        fats you should consume daily.
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Recipe Suggestions: 
          </span>
          FitLife Coach makes
        healthy eating enjoyable with a collection of nutritious recipes that
        match your meal plan. You'll discover a variety of delicious meals,
        snacks, and smoothies that align with your fitness objectives. 
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Progress Tracking:
          </span>
          Keep an eye on your progress with built-in tracking tools.
        Monitor your fitness achievements and nutrition adherence, making it
        easier to stay committed and reach your goals. 
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Community and Support:
          </span>
          Join a community of like-minded individuals who are also on their
        fitness journey. Share your experiences, ask for advice, and motivate
        each other to achieve your goals. 
        </h3>
        <h3
          className="text-left"
          style={{ width: "750px", fontSize: "18px", marginTop: "10px" }}
        >
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Daily Reminders: 
          </span>
          Don't worry about
        missing workouts or meals. FitLife Coach sends you daily reminders to
        keep you on track and focused. FitLife Coach is your trusted partner in
        achieving a healthier and happier lifestyle. Download it now and take
        the first step towards a fitter, stronger, and better you. Your fitness
        journey begins here. 
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
              ChatGPT
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

export default FitLife;
