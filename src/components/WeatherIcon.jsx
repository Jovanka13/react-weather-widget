import React from 'react';
import './WeatherIcon.css';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';

function WeatherIcon() {
  return (
    <div className='flex flex-col items-center justify-center my-14'>
        <img src={cloud_icon} alt='' className='weather-image'/>
    </div>
  )
}

export default WeatherIcon