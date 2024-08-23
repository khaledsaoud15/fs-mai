import React from "react";

const Products = () => {
  return (
    <section className=" w-full items-center bg-black h-fit px-10 py-8 flex flex-col gap-10 border border-white rounded-lg">
      <h2 className="text-3xl font-bold text-white ">Best Sellers</h2>
      <div className="flex items-center gap-6">
        <p className="text-sm text-gray-300 cursor-pointer hover:text-red-700">
          All Products
        </p>
        <p className="text-sm text-gray-300 cursor-pointer hover:text-red-700">
          Tires & Wheels
        </p>
        <p className="text-sm text-gray-300 cursor-pointer hover:text-red-700">
          Headlights
        </p>
        <p className="text-sm text-gray-300 cursor-pointer hover:text-red-700">
          Automotive Rims
        </p>
      </div>
    </section>
  );
};

export default Products;
