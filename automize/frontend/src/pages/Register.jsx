import React, { useRef, useState } from "react";
import Button from "../ui/Button";
import axios from "axios";

const Register = () => {
  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const registerUser = async (e) => {
    const user = {
      username: userRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(user);
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5050/api/register", user);
      console.log(res);
    } catch (err) {
      console.error(err);
    }

    userRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <section className="pos w-1/3 h-fit p-8 rounded-xl shadow-2xl flex flex-col gap-4 items-center">
      <h2 className="text-2xl font-bold text-center">Register</h2>
      <div className="flex flex-col gap-3 w-full h-auto">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 outline-none border border-gray-500 rounded-md"
          ref={userRef}
          name="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 outline-none border border-gray-500 rounded-md"
          ref={emailRef}
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 outline-none border border-gray-500 rounded-md"
          ref={passwordRef}
          name="password"
        />
        <button
          className="w-fit px-4 py-2 bg-transparent rounded-md border border-black shadow-2xl mx-auto"
          onClick={registerUser}
        >
          Register
        </button>
      </div>
    </section>
  );
};

export default Register;
