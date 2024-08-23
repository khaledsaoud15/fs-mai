import React, { useEffect, useState } from "react";
import Mobile from "./Mobile";
import Web from "./Web";

const Nav = () => {
  const [trigerred, setTrigerred] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth < 1024 ? setTrigerred(true) : setTrigerred(false);
    });
  }, [window.innerWidth]);

  return <nav>{trigerred ? <Mobile /> : <Web />}</nav>;
};

export default Nav;
