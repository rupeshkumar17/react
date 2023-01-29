import React from "react";
// const name = "react"; name..
import Navbar from "./Navbar";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      {/* <div className="navbars">Hello from HomePage</div>

      <Navbar title="LOGINPAGE" />
      <Login /> */}

      <BrowserRouter>
        <div className="navbars">Hello from HomePage</div>
        <Navbar title="login" />
        <Routes>
          {/* <Route path="/navbar" element={<Navbar title="login" />} /> */}
          <Route path="/" element={<Login />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" render={() => <Link to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default HomePage;
