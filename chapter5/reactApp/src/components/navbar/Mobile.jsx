import React, { useState } from "react";

const menue = [
  {
    text: "Computers",
    icons: "./assets/icons/arrow-down.svg",
  },
  {
    text: "Cell Phones",
  },
  {
    text: "Entertainement",
    icons: "./assets/icons/arrow-down.svg",
  },
  {
    text: "Home theater",
    icons: "./assets/icons/arrow-down.svg",
  },
  {
    text: "Audio & Headphones",
  },
  {
    text: "Car Electronics",
  },
  {
    text: "Video Games & Console",
    icons: "./assets/icons/arrow-down.svg",
  },
  {
    text: "Software & Gift Cards",
  },
];

const Mobile = () => {
  const [active, setActive] = useState(false);

  console.log(active);

  return (
    <section className="flexbox justify-between h-14 px-8 relative bg-cardBf">
      <div
        className="flex flex-col gap-1 w-8 cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <span className="w-full bg-black h-1 rounded-lg"></span>
        <span className="w-3/4 bg-black h-1 rounded-lg"></span>
        <span className="w-full bg-black h-1 rounded-lg"></span>
      </div>
      <div
        className={`flex flex-col w-full ${
          active ? "h-auto" : "h-0"
        }  overflow-hidden absolute  top-full bg-white left-0`}
      >
        {menue.map((el, key) => (
          <div
            className="flexbox justify-between w-full px-8 py-4 h-auto"
            key={key}
          >
            <h1>{el.text}</h1>
            {el.icons && <img src={el.icons} className="w-6 h-6 bg-cardBf" />}
          </div>
        ))}
      </div>

      <div className="flexbox gap-3 w-fit">
        <div className="flexbox">
          <div className="w-6 h-6 bg-pink-400 opacity-50 rounded-full"></div>
          <div className="w-6 h-6 bg-blue-400 rounded-full -ml-3"></div>
        </div>
        <h1 className="text-xl font-bold">Hubmarket</h1>
      </div>
      <div className="flexbox gap-4 w-fit">
        <img src="./assets/icons/cart.svg" alt="" className="w-6 h-6" />
        <img src="./assets/icons/cart.svg" alt="" className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Mobile;
