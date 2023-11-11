import React from 'react'
import './SunriseAndSunset.css'
import sunriseSunset from '../assets/sunrise_sunset.svg';

const SunriseAndSunset = (props) => {
  return (
    <div className='flex flex-col mt-5 wrapper'>
        <div className='flex flex-col gap-5'>
            <p className='details-title'>SUNRISE AND SUNSET</p>
            <img src={sunriseSunset} alt='' />
            <p>06:00 AM</p>
        </div>
        <div className='flex flex-col pt-10'>
            <p className='temp'>Maximum Temperature: <span>Math.floor({props.weather?.main?.temp_max}) °</span></p>
            <p className='temp'>Minimum Temperature: <span>Math.floor({props.weather?.main?.temp_min}) °</span></p>
        </div>
    </div>
  )
}

export default SunriseAndSunset
