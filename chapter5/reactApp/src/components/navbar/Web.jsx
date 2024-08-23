import React from "react";

const Web = () => {
  return (
    <section className="flex flex-col w-full h-32 ">
      <div className="w-full h-3/5 bg-navBg px-24 flexbox justify-between gap-8 ">
        <div className="flexbox gap-3 w-fit">
          <div className="flexbox">
            <div className="w-6 h-6 bg-pink-400 opacity-50 rounded-full"></div>
            <div className="w-6 h-6 bg-blue-400 rounded-full -ml-2"></div>
          </div>
          <h1 className="text-xl font-bold text-white font-mn">Hubmarket</h1>
        </div>

        <div className="flexbox w-2/3 h-9 rounded-3xl overflow-hidden bg-white ">
          <input
            type="text"
            className="w-3/5 h-auto pl-4 border-none outline-none"
            placeholder="Search..."
          />
          <p className="text-sm font-thin ml-auto mr-8">All categories</p>
          <button className="w-fit h-full bg-main px-4">Search</button>
        </div>
        <div className="flexbox w-3/5 h-fit gap-6 ">
          <h1 className="text-base text-white ml-auto font-mn">
            English / USD
          </h1>
          <h1 className="text-base text-white">Wishlist</h1>
          <h1 className="text-base text-white">Mu Account</h1>
          <h1 className="text-base text-white">Costumer Service</h1>
        </div>
      </div>

      <div className="w-full h-2/5 bg-navSubBg px-24 text-white flexbox justify-between">
        <div className="flexbox  h-full gap-4">
          <div className="flexbox w-40 justify-between border-r h-3/4 pr-4">
            <h1>All Categories</h1>
            <img
              src="./assets/icons/arrow-down-white.svg"
              alt=""
              className="w-6 h-6"
            />
          </div>
          <div className="flexbox gap-8">
            <h1 className="text-base font-bold">Home theater</h1>
            <h1 className="text-base font-bold">
              Computers{" "}
              <span className="py-1 px-3 bg-cardBf/50 rounded-xl  text-xs ml-1">
                Sale
              </span>{" "}
            </h1>
            <h1 className="text-base font-bold">Cell Phones</h1>
            <h1 className="text-base font-bold">Features</h1>
          </div>
        </div>
        <img src="./assets/icons/cart-white.svg" alt="" className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Web;
