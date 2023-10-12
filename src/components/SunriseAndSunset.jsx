import React from 'react'
import './SunriseAndSunset.css'
import graphic from '../assets/Component 3.png';

const SunriseAndSunset = () => {
  return (
    <div className='flex flex-col mt-5 wrapper'>
        <div className='flex flex-col gap-5'>
            <p className='details-title'>SUNRISE AND SUNSET</p>
            <img src={graphic} alt='' />
        </div>
        <div className='flex flex-col pt-10'>
            <p className='daylight'>Length of the day: <span className='length-of-day'>13H 12M</span></p>
            <p className='daylight'>Remaining daylight: <span className='length-of-day'>9H 22M</span></p>
        </div>
    </div>
  )
}

export default SunriseAndSunset