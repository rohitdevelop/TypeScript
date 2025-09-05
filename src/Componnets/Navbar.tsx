// src/components/Navbar.tsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Themecontext";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md ">
      <h1 className="text-xl font-bold">My Website</h1>
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/prep" className="hover:underline">About</Link>
        <button 
          onClick={toggleTheme} 
          className="px-3 py-1 rounded-lg border"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
