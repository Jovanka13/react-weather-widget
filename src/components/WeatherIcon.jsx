import React, { useState } from 'react';
import './WeatherIcon.css';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';

function WeatherIcon(props) {
  const [wicon, setWicon] = useState(cloud_icon);

  if(props.weather?.weather[0].icon == '01d' || props.weather?.weather[0].icon == '01n') {
    setWicon(clear_icon);
  } else if (props.weather?.weather[0].icon == '02d' || props.weather?.weather[0].icon == '02n') {
    setWicon(cloud_icon);
  } else if (props.weather?.weather[0].icon == '03d' || props.weather?.weather[0].icon == '03n') {
    setWicon(drizzle_icon);
  } else if (props.weather?.weather[0].icon == '04d' || props.weather?.weather[0].icon == '04n') {
    setWicon(drizzle_icon);
  } else if (props.weather?.weather[0].icon == '09d' || props.weather?.weather[0].icon == '09n') {
    setWicon(rain_icon);
  } else if (props.weather?.weather[0].icon == '10d' || props.weather?.weather[0].icon == '10n') {
    setWicon(rain_icon);
  } else if (props.weather?.weather[0].icon == '13d' || props.weather?.weather[0].icon == '13n') {
    setWicon(snow_icon);
  } else {
    setWicon(clear_icon);
  }

  return (
    <div className='flex flex-col items-center justify-center my-14'>
        <img src={wicon} alt='' className='weather-image'/>
    </div>
  )
}

export default WeatherIcon