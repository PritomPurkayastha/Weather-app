import setContext from "./Context";
import React, { useState } from "react";

export default function State({ children }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [input, setInput] = useState("");
  const [city, setCity] = useState("Mumbai");
  const [currentTempData, setCurrentTempData] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);
  return (
    <setContext.Provider
      value={{
        latitude,
        setLatitude,
        longitude,
        setLongitude,
        city,
        setCity,
        currentTempData,
        setCurrentTempData,
        input,
        setInput,
        weatherForecast,
        setWeatherForecast,
      }}
    >
      {children}
    </setContext.Provider>
  );
}
