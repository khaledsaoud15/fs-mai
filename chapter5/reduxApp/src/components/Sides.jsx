import React from "react";
import Categories from "./parts/Categories";
import Reviews from "./parts/Reviews";

const Sides = () => {
  return (
    <section className="flex flex-col gap-8 h-full gap-auto w-1/4">
      <Categories />
      <Reviews />
    </section>
  );
};

export default Sides;
