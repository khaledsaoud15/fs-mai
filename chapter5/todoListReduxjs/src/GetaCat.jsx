import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const GetCat = () => {
  const [data, setData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const getAllData = async () => {
      const res = await axios.get(
        `http://localhost:4500/api/all?category=${category}`
      );
      console.log(res.data.data);
      setData(res.data.data);
    };

    getAllData();
  }, []);

  return (
    <>
      <div className="flex items-center gap-4"></div>
      <section className="grid grid-cols-3 w-2/4 h-fit p-8 pos ">
        {data.map((d, i) => (
          <div className="w-full h-fit p-4 flex flex-col gap-3" key={i}>
            <h1>{d.name}</h1>
          </div>
        ))}
      </section>
    </>
  );
};

export default GetCat;
