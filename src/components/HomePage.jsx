import React from "react";
// const name = "react"; name..
import Navbar from "./Navbar";
import Login from "./Login";

const HomePage = () => {
  return (
    <>
      <div className="navbars">Hello from HomePage</div>

      <Navbar />
      <Login />
    </>
  );
};

export default HomePage;
