import React from "react";
import Navbar from "./Componnets/Navbar";
import Home from "./Componnets/Home";
import Prep from "./Componnets/Prep";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/prep" element={<Prep name="rohit singh"/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
