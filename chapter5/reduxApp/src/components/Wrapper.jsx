import React from "react";
import Sides from "./Sides";
import Pub from "./Pub";
import Products from "./Products";

const Wrapper = () => {
  return (
    <div className="flex h-full w-full my-8 gap-6">
      <Sides />
      <div className="flex w-4/5 gap-8 h-fit flex-col">
        <Pub />
        <Products />
      </div>
    </div>
  );
};

export default Wrapper;
