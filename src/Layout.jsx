import React, { useEffect, useState } from "react";
import WeatherIcon from "./components/WeatherIcon";
import WeatherLocationAndTemperature from "./components/WeatherLocationAndTemperature";
import WeatherDetails from "./components/WeatherDetails";
import SunriseAndSunset from "./components/SunriseAndSunset";
import { getWeather } from "./weather-service";

function Layout({ city, activeCarouselItem, itemIdx }) {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (activeCarouselItem === itemIdx) {
            getWeather(city).then((res) => setWeather(res.data));
        }
    }, [activeCarouselItem]);

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
