import React, { useContext, useEffect } from "react";
import setContext from "../Context/Context";
import "./WeatherForeCast.css";

export default function WeatherForeCast() {
  const { city, weatherForecast, setWeatherForecast } =
    useContext(setContext);
  useEffect(() => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=3c888d53027744179eb100040220608&q=${city}&days=12&aqi=no&alerts=yes`;

    fetch(url)
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
        console.log(data, "forecast");
        setWeatherForecast(data);
      });
  }, [city]);
  return (
    <div className="weatherForecast">
      <h1>
        Weather Forecast of{" "}
        {weatherForecast !== null ? weatherForecast.location.name : null}
      </h1>
      <div className="dailyForecast">
        {weatherForecast !== null
          ? weatherForecast.forecast.forecastday.map((dailyForecast) => {
              return (
                <div className="forecast" key={dailyForecast.date_epoch}>
                  <h4>{dailyForecast.date}</h4>
                  <div className="icon">
                    <img src={dailyForecast.day.condition.icon} />
                  </div>
                  <div className="temp">
                    {dailyForecast.day.maxtemp_c}&deg;C /{" "}
                    {dailyForecast.day.mintemp_c}&deg;C
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
