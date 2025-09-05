// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Componnets/Navbar";
import Home from "./Componnets/Home";
import Prep from "./Componnets/Prep";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prep" element={<Prep name="Counter app" />} />
      </Routes>
    </>
  );
};

export default App;
