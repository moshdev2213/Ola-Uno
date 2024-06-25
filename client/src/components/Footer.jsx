import React from "react";
import reactLogo from "../assets/react.svg";
import express from "../assets/express.png";
import platform from "../assets/platform.png";

export default function Footer({ viteLogo }) {
  return (
    <>
      <p className="read-the-docs">
        Developed a comprehensive IoT solution using a React web app with an
        Express backend to control an ESP32 board's bulbs. Leveraging PlatformIO
        for development, the system enables real-time toggling of bulbs on/off
        via a user-friendly web interface, <br /> demonstrating seamless integration
        between frontend, backend, and embedded hardware.Below Are The Tools And Techs Used
      </p>
      <p className="read-the-docs">dev by @moshdev2213 ⚡💡</p>
      <div
        className=""
        style={{
          display: "flex",
          marginTop:'40px',
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <a href="#">
          <img src={platform} className="logo platform" alt="React logo" />
        </a>
        <a href="#">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="#">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <a href="#">
          <img
            src={express}
            className="logo express"
            style={{ borderRadius: "10px" }}
            alt="React logo"
          />
        </a>
      </div>
    </>
  );
}
