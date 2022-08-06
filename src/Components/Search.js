import React, { useContext } from "react";
import "./Search.css";
import setContext from "../Context/Context";

export default function Search() {
  const { input, setInput, setCity } = useContext(setContext);
  return (
    <div className="search">
      <form onSubmit={(event)=>{
        event.preventDefault();
        setCity(input);
        setInput("");
      }}>
        <input
          type="text"
          placeholder="Search for your city"
          className="input"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
