import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
