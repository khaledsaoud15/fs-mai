import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginuser } from "../utils/loginSlice";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, errorMessage } = useSelector(
    (state) => state.auth
  );

  const login = (e) => {
    e.preventDefault();

    dispatch(
      loginuser({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    )
      .unwrap()
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <section className="pos w-1/3 h-fit p-8 rounded-xl shadow-2xl flex flex-col gap-4 items-center">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <div className="flex flex-col gap-3 w-full h-auto">
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
          onClick={login}
          disabled={isLoading}
        >
          {isLoading ? "...Loading" : "Login"}
        </button>
        {isError && <p>{errorMessage}</p>}
      </div>
    </section>
  );
};

export default Login;
