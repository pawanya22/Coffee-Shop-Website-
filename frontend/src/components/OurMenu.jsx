import React from "react";

const Menu = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
        <br></br>
      <h1>Our Menu</h1> <br></br>
      <img
        src="ourmenu.jpg"
        alt="Our Menu"
        style={{
          width: "60%",
          height: "60%",
          borderRadius: "10px", // Optional: to make the image look better
        }}
      /> <br></br>
    </div>
  );
};

export default Menu;
