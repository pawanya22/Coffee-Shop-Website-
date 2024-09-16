import React from 'react'
import {data} from '../restApi.json'

const team = () => {
  return (
    <section className="team" id="team" style={{ position: "relative", height: "100vh" }}>
      {/* Navigation Bar */}

      {/* Blurred Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('./ourteam.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          //filter: "blur(5px)",
          zIndex: 1,
        }}
      ></div>

      {/* Optional dark overlay for better readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          //backgroundColor: "rgba(0, 0, 0, 0.4)", // Optional overlay
          zIndex: 2,
        }}
      ></div>

      {/* Main Content */}
      
    </section>
  );
}

export default team
