import React, { useEffect, useState } from "react";
import "./WeatherWidget";
import SearchBar from "./components/SearchBar";
import WeatherIcon from "./components/WeatherIcon";
import WeatherLocationAndTemperature from "./components/WeatherLocationAndTemperature";
import WeatherDetails from "./components/WeatherDetails";
import SunriseAndSunset from "./components/SunriseAndSunset";
import { getWeather } from "./weather-service";
import Layout from "./Layout";

function App() {
  const [location, setLocation] = useState("Skopje");
  const [weather, setWeather] = useState();

  useEffect(() => {
    getWeather(location).then((res) => setWeather(res.data));
  }, [location]);

  return (
    <div className="mx-auto max-w-sm mt-5 py-3 px-5 h-fit">
      <SearchBar />
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Layout />
          </div>
          <div className="carousel-item">
            <Layout />
          </div>
          <div className="carousel-item">
            <Layout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
