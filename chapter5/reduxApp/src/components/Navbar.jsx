import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-16 bg-white px-24">
      <h1 className="text-4xl font-bold">CarPiecEs</h1>
      <div className="flex items-center gap-4">
        <p className="font-thin cursor-pointer">Home</p>
        <p className="font-thin cursor-pointer">Collections</p>
        <p className="font-thin cursor-pointer">Other Pages</p>
        <p className="font-thin cursor-pointer">Blog Page</p>
      </div>
      <div className="flex items-center gap-4">
        <img
          src="./assets/icons/search.svg"
          alt=""
          className="w-6 h-6 object-cover cursor-pointer"
        />
        <img
          src="./assets/icons/cart.svg"
          alt=""
          className="w-6 h-6 object-cover cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
