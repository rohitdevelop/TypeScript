// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Componnets/Navbar";
import Home from "./Componnets/Home";
import Prep from "./Componnets/Prep";
import Typescript from "./Componnets/Typescript";
import Uniqe from "./Componnets/Uniqe";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Typescript" element={<Typescript />} />
        <Route path="/Uniqe" element={<Uniqe />} />
        <Route path="/prep" element={<Prep name="Counter app" />} />
      </Routes>
    </>
  );
};

export default App;
