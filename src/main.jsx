import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SimpleDelivery from "./SimpleDelivery.jsx";
import SkiPower from "./SkiPower.jsx";
import HoverCraft from "./Hovercraft.jsx";
import SchoolPortal from "./SchoolPortal.jsx";
import Robot from "./Robot.jsx";
import Ptp from "./Ptp.jsx";
import FitLife from "./FitLife.jsx";
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
