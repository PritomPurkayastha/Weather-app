import React, { useContext, useEffect } from "react";
import setContext from "../Context/Context";
import "./CurrentWeather.css";
import { useNavigate } from "react-router-dom";

export default function CurrentWeather() {
  const { city, currentTempData, setCurrentTempData } = useContext(setContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ac741d0a0306664ce543bf2db6e0b382`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          return Promise.reject("error 404");
        } else {
          return Promise.reject("some other error: " + response.status);
        }
      })
      .then((data) => {
        console.log(data, "data");
        setCurrentTempData(data);
      })
      .catch((e) => {
        navigate("/error");
      });
  }, [city]);

  return (
    <div className="currentWeather">
      {currentTempData !== null ? (
        <div className="weather">
          <h1 className="city">
            {currentTempData.name},{currentTempData.sys.country}
          </h1>
          <div className="currentTemp">
            {currentTempData.main.temp}&deg;
            <span className="description">
              {currentTempData.weather[0].description}
            </span>
          </div>
          <div className="max-min-temp">
            <span className="maxTemp">
              Maximum temp: {currentTempData.main.temp_max}&deg;
            </span>
            <span className="minTemp">
              Minimun temp: {currentTempData.main.temp_min}&deg;
            </span>
          </div>
        </div>
      ) : (
        <h1>wdwaD</h1>
      )}
    </div>
  );
}
