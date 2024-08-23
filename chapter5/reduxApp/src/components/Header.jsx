import React from "react";

const Header = () => {
  return (
    <section className="relative w-full h-screen rounded-xl flex items-center justify-left overflow-hidden">
      <img
        src="./assets/images/slide1.webp"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="flex flex-col gap-3 w-fit p-4 z-10 text-white">
        <span className="text-red-600 font-semibold text-lg">
          SPORT EDITION
        </span>
        <h1 className="text-5xl font-bold w-2/4 leading-[65px]">
          SPORT WHEELS FOR YOUR SUV
        </h1>
        <button className="w-fit py-2 px-4 bg-black rounded-full text-sm">
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default Header;
