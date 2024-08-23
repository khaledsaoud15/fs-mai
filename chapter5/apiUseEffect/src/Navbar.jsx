import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-24 h-12 bg-blue-300">
      <h1 className="text-2xl font-semibold">React Router Dom</h1>
      <div className="flex items-center gap-4">
        <NavLink to="/">
          <p className="text-base font-semibold">Home</p>
        </NavLink>
        <NavLink to="/categories">
          <p className="text-base font-semibold">Categories</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
