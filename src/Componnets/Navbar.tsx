import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Themecontext";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="bg-amber-900 flex items-center justify-around gap-7 p-4 text-white">
      <Link to="/">Home</Link>
      <Link to="/prep">Prep</Link>

      <button
        onClick={toggleTheme}
        className="bg-black text-white py-2 px-3 rounded-2xl"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Navbar;
