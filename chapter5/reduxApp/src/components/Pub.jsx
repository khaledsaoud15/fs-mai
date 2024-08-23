import React from "react";

const Pub = () => {
  return (
    <section className="slash group flex items-center justify-left w-full h-[80vh] relative rounded-lg overflow-hidden slash">
      <img
        src="./assets/images/banner.webp"
        alt=""
        className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-125 transition-all duration-300
        "
      />
      <div className="flex flex-col gap-4 w-fit p-4 z-10 text-white ml-10">
        <span className="text-red-600 font-semibold text-base">
          Auto Painting Services
        </span>
        <h1 className="text-4xl font-bold w-2/3 leading-[40px]">
          Auto body Paint Repair Services
        </h1>
        <button className="w-fit py-4 px-8 bg-red-700 rounded-full text-sm">
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default Pub;
