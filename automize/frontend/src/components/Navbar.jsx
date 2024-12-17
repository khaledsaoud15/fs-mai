import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [active, setIsActive] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 h-[80px] relative md:px-24">
      <h1 className="hoverable w-fit text-xl font-bold md:text-3xl">
        Automize
      </h1>
      <div
        className="hoverable flex flex-col gap-1 w-8 h-8 cursor-pointer md:hidden"
        onClick={() => setIsActive(!active)}
      >
        <span className="w-full h-[3px] bg-black rounded-xl"></span>
        <span className="w-full h-[3px] bg-black rounded-xl"></span>
        <span className="w-full h-[3px] bg-black rounded-xl"></span>
      </div>
      <div
        className={`${
          active ? "w-full" : "w-0"
        } z-10 flex flex-col overflow-hidden gap-4  py-3 h-fit absolute top-full left-0 bg-white md:static md:items-center md:h-auto md:w-auto md:flex-row md:bg-transparent`}
      >
        <p className="hoverable ml-3 -transform-x-24 pAnim text-black">Home</p>
        <p className="hoverable text-black ml-3  pAnim">About</p>
        <p className="hoverable text-black ml-3  pAnim">Contact</p>
        <p className="hoverable text-black ml-3  pAnim">Blog</p>
      </div>
    </nav>
  );
};

export default Navbar;
