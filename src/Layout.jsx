import React from "react";
import WeatherIcon from "./components/WeatherIcon";
import WeatherLocationAndTemperature from "./components/WeatherLocationAndTemperature";
import WeatherDetails from "./components/WeatherDetails";
import SunriseAndSunset from "./components/SunriseAndSunset";

function Layout({ weather }) {
  return (
    <>
      <WeatherIcon weather={weather} />
      <WeatherLocationAndTemperature weather={weather} />
      <WeatherDetails weather={weather} />
      <SunriseAndSunset weather={weather} />
    </>
  );
}

export default Layout;
