import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const PostWeapon = () => {
  const name = useRef();
  const category = useRef();
  const damage = useRef();
  const weight = useRef();
  const desc = useRef();

  const navigate = useNavigate();

  const postToBackEnd = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4500/api/weapon", {
        name: name.current.value,
        category: category.current.value,
        damage: damage.current.value,
        weight: weight.current.value,
        description: desc.current.value,
      });
      navigate("/");
    } catch (err) {
      throw new Error();
    }
  };

  return (
    <section className="pos rounded-md flex flex-col gap-4 p-8 w-2/4 h-fit bg-gray-200 shadow-2xl">
      <h2 className="text-3xl font-bold text-gray-800">Post Weapon</h2>
      <form className="flex flex-col gap-4 w-full h-96">
        <input
          type="text"
          className="w-full py-2 px-4 outline-none border border-gray-300 rounded-md"
          placeholder="Weapon name"
          ref={name}
        />
        <input
          type="text"
          className="w-full py-2 px-4 outline-none border border-gray-300 rounded-md"
          placeholder="Category"
          ref={category}
        />
        <input
          type="number"
          className="w-full py-2 px-4 outline-none border border-gray-300 rounded-md"
          placeholder="damage"
          ref={damage}
        />
        <input
          type="number"
          className="w-full py-2 px-4 outline-none border border-gray-300 rounded-md"
          placeholder="Weight"
          ref={weight}
        />
        <input
          type="text"
          className="w-full py-2 px-4 outline-none border border-gray-300 rounded-md"
          placeholder="description"
          ref={desc}
        />
        <input
          type="submit"
          value="Add"
          onClick={postToBackEnd}
          className="w-fit px-4 py-2 bg-teal-500 rounded-md mx-auto cursor-pointer"
        />
      </form>
    </section>
  );
};

export default PostWeapon;
