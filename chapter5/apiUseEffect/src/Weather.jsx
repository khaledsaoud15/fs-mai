import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Weather = () => {
  const [data, setData] = useState();
  const [city, setCity] = useState("Algiers");
  const ref = useRef();

  const getCityName = () => {
    setCity(ref.current.value);
    ref.current.value = "";
  };
  console.log(city);

  useEffect(() => {
    const getData = async () => {
      const res =
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&Weatherid=ed14d80d557e488e20688859d87c6b2a&units=metric
`);
      setData(res.data);

      console.log(res.data);
    };
    getData();
  }, [city]);

  return (
    <>
      <div className="flex flex-col gap-4 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-1/3 h-fit p-3 bg-slate-200 rounded-md shadow-2xl">
        <div className="w-full h-8 bg-white rounded-md overflow-hidden">
          <input
            ref={ref}
            type="text"
            className="w-4/5 h-full bg-transparent outline-none pl-4"
          />
          <button
            onClick={getCityName}
            className="w-1/5 h-full px-2 bg-green-500 text-base text-white"
          >
            Search..
          </button>
        </div>
        <div className="w-full flex flex-col gap-4 h-fit items-center justify-center">
          <img
            src={`./images/${data?.weather[0].main}.svg`}
            alt=""
            className="w-32 h-auto object-cover"
          />
          <div className="flex  items-center">
            <h1 className="text-2xl font-thin">{city} ,</h1>
            <p className="text-xl font-bold">{data?.sys?.country}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-lg font-thin">
              Temperature : <b> {Math.floor(data?.main?.temp)}°C</b>
            </p>
            <p className="text-lg font-thin">
              Humidity : <b>{data?.main?.humidity}%</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
