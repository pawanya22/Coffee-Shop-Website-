import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection" style={{ position: "relative", height: "100vh" }}>
      {/* Navigation Bar */}
      <div style={{ zIndex: 4 }}>
        <Navbar />
      </div>

      {/* Blurred Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('./coffee.png')",
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
};

export default HeroSection;
/*<div className="container" style={{ position: "relative", zIndex: 3, color: "#fff", textAlign: "center" }}>
        <h1 className="heroTitle" style={{ fontSize: "4rem", marginBottom: "50px" }}>
          Welcome to Gourmet Grove
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "200px"  }}>
          Discover a place where every meal is crafted to perfection, <br></br>offering a blend of taste and quality that makes every bite unforgettable.
        </p>
      </div>*/