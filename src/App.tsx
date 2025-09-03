import React, { useContext } from "react";
import Navbar from "./Componnets/Navbar";
import Home from "./Componnets/Home";
import Prep from "./Componnets/Prep";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./Componnets/Themecontext";

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "bg-black text-white" : "bg-white text-black"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prep" element={<Prep name="rohit singh" />} />
      </Routes>
    </div>
  );
};

export default App;
