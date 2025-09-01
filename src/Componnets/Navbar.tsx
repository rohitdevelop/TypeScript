import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-amber-900 flex items-center justify-around gap-7 p-4 text-white">
      <Link to="/">Home</Link>
      <Link to="/prep">Prep</Link>
    </div>
  );
};

export default Navbar;
