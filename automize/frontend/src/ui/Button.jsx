import React from "react";

const Button = ({ children }) => {
  return (
    <button
      onClick={children}
      className="w-fit px-4 py-2 bg-transparent rounded-md border border-black shadow-2xl mx-auto"
    >
      {children}
    </button>
  );
};

export default Button;
