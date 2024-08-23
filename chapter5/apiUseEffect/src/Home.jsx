import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    };

    getData();
  }, []);

  return (
    <section>
      <h1 className="text-xl font-bold">Products</h1>
      <div className="grid grid-cols-4 gap-4 w-full h-fit px-24 mt-12">
        {data.map((d, i) => (
          <div
            className="w-full h-[65vh] border rounded-md shadow-3xl flex flex-col gap-2 p-3"
            key={i}
          >
            <img src={d.image} alt="" className="w-full h-2/4 " />
            <h1 className="text-center font-bold">
              Title: {d.title.slice(0, 9)}....
            </h1>
            <p className="text-base font-thin text-center">
              Desc: {d.description.slice(0, 60)}...
            </p>
            <NavLink to={`/products/${d.id}`} className="mt-auto mx-auto">
              <button className="w-fit  bg-blue-500 py-2 px-4 rounded-md mt-auto text-white">
                Read more
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
