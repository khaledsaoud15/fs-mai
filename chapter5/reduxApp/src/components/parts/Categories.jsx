import React from "react";

const cat = [
  {
    icon: "./assets/icons/headlight.svg",
    text: "Headlights & Lightning",
  },
  {
    icon: "./assets/icons/audio.svg",
    text: "Car Audio Systems",
  },
  {
    icon: "./assets/icons/tires.svg",
    text: "Tires & Wheels",
  },
  {
    icon: "./assets/icons/suspension.svg",
    text: "Suspension",
  },
  {
    icon: "./assets/icons/oil.svg",
    text: "Oil Car",
  },
  {
    icon: "./assets/icons/brakes.svg",
    text: "Brakes",
  },
  {
    icon: "./assets/icons/safety.svg",
    text: "Auto Safety & Security",
  },
  {
    icon: "./assets/icons/rims.svg",
    text: "Automotive Rims",
  },
  {
    icon: "./assets/icons/display.svg",
    text: "Automotive Display",
  },
  {
    icon: "./assets/icons/battery.svg",
    text: "Battery",
  },
];

const Categories = () => {
  return (
    <aside className="flex bg-black flex-col gap-1 py-3  border border-white rounded-lg h-fit w-full">
      <div className="flex px-8 items-center gap-8 py-3 border-b border-b-white">
        <div className="flex flex-col gap-1">
          <span className="w-6 h-[1px] rounded-full bg-white"></span>
          <span className="w-6 h-[1px] rounded-full bg-white"></span>
          <span className="w-6 h-[1px] rounded-full bg-white"></span>
          <span className="w-4 h-[1px] rounded-full bg-white"></span>
        </div>
        <h1 className="text-lg font-semibold text-white">Browse Categories</h1>
      </div>
      {cat.map((c, key) => (
        <div className="flex items-center gap-4 px-8 py-3" key={key}>
          <img src={c.icon} alt="" className="w-4 h-4 object-cover" />
          <h3 className="text-base font-thin text-white">{c.text}</h3>
        </div>
      ))}
    </aside>
  );
};

export default Categories;
