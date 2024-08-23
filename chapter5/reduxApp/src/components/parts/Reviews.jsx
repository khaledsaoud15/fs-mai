import React from "react";

const Reviews = () => {
  return (
    <aside className="w-full bg-black h-fit py-8 px-6 flex flex-col items-center gap-4 border border-white rounded-lg">
      <img
        src="./assets/images/avatar.jpg"
        alt=""
        className="w-1/3 h-auto rounded-full object-cover mx-auto"
      />
      <div className="flex items-center justify-center">
        <img
          src="./assets/icons/star.svg"
          alt=""
          className="w-5 h-5 object-cover"
        />
        <img
          src="./assets/icons/star.svg"
          alt=""
          className="w-5 h-5 object-cover"
        />
        <img
          src="./assets/icons/star.svg"
          alt=""
          className="w-5 h-5 object-cover"
        />
        <img
          src="./assets/icons/star.svg"
          alt=""
          className="w-5 h-5 object-cover"
        />
        <img
          src="./assets/icons/star.svg"
          alt=""
          className="w-5 h-5 object-cover"
        />
      </div>
      <h2 className="font-bold text-white text-lg">Great Prices & Services</h2>
      <p className="text-base font-thin text-gray-400 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non
        dolorem labore tenetur sed optio deleniti eum quidem. Nobis
      </p>
      <span className="font-semibold text-white text-sm">
        Paul Eden - On google reviews
      </span>
    </aside>
  );
};

export default Reviews;
