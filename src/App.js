import React from 'react';
import './WeatherWidget';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import SearchBar from './components/SearchBar';
import WeatherIcon from './components/WeatherIcon';
import WeatherLocationAndTemperature from './components/WeatherLocationAndTemperature';
import WeatherDetails from './components/WeatherDetails';
import SunriseAndSunset from './components/SunriseAndSunset';


function App() {
  return (   
      <div className="mx-auto max-w-sm mt-5 py-3 px-5 h-fit">
        <SearchBar />
        <WeatherIcon />
        <WeatherLocationAndTemperature />
        <WeatherDetails />
        <SunriseAndSunset />

      </div>
  );
}

export default App;
