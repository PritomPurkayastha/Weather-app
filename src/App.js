import State from "./Context/State";
import "./App.css";
import Search from "./Components/Search";
import CurrentWeather from "./Components/CurrentWeather"
import WeatherForeCast from "./Components/WeatherForeCast"
function App() {
  return (
    <State>
      <div className="App">
        <div className="title">
          <h1 className="title">Weather App</h1>
        </div>
        <div className="weatherInfo">
          <div className="info">
            <Search />
            <CurrentWeather/>
          </div>
          <div className="weatherForecast">
            <WeatherForeCast/>
          </div>
        </div>
      </div>
    </State>
  );
}

export default App;
