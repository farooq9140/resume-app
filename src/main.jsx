import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SimpleDelivery from "./Projects/SimpleDelivery.jsx";
import SkiPower from "./Projects/SkiPower.jsx";
import HoverCraft from "./Projects/Hovercraft.jsx";
import SchoolPortal from "./Projects/SchoolPortal.jsx";
import Robot from "./Projects/Robot.jsx";
import Ptp from "./Projects/Ptp.jsx";
import FitLife from "./Projects/FitLife.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.StrictMode>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </React.StrictMode>
    ),
  },
  {
    path: "SimpleDelivery",
    element: (
      <React.StrictMode>
        <NextUIProvider>
          <SimpleDelivery />
        </NextUIProvider>
      </React.StrictMode>
    ),
  },
  ,
  {
    path: "SkiPower",
    element: (
      <React.StrictMode>
        <NextUIProvider>
          <SkiPower />
        </NextUIProvider>
      </React.StrictMode>
    ),
  },
  ,
  {
    path: "HoverCraft",
    element: (
      <React.StrictMode>
        <NextUIProvider>
          <HoverCraft />
        </NextUIProvider>
      </React.StrictMode>
    ),
  },
  ,
  {
    path: "SchoolPortal",
    element: (
      <React.StrictMode>
        <NextUIProvider>
          <SchoolPortal />
        </NextUIProvider>
      </React.StrictMode>
    ),
  },
  ,
  {
    path: "Robot",
    element: (
      <React.StrictMode>
        <NextUIProvider>
          <Robot />
        </NextUIProvider>
      </React.StrictMode>
    ),
  },
  ,
  {
    path: "p2p",
    element: (
      <React.StrictMode>
        <NextUIProvider>
          <Ptp />
        </NextUIProvider>
      </React.StrictMode>
    ),
  },
  ,
  {
    path: "FitLife",
    element: (
      <React.StrictMode>
        <NextUIProvider>
          <FitLife />
        </NextUIProvider>
      </React.StrictMode>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
