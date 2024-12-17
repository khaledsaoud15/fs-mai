import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CustomCursor from "./ui/CustomCursor";

const App = () => {
  return (
    <BrowserRouter>
      <CustomCursor />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
