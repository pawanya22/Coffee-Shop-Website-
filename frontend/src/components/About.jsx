import React from "react";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "700px", // Adjust height as needed
              backgroundImage: "url('./aboutus.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
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
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
