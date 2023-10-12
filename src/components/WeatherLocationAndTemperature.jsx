import './WeatherLocationAndTemperature.css';
import { UilLocationArrow } from '@iconscout/react-unicons'

import React from 'react'

function WeatherLocationAndTemperature() {
  return (
    <div className='flex flex-col items-center justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <div className='text-3xl font-bold'>Skopje</div>
            <div className='flex flex-row w-1/4 items-center justify-center'>
              <UilLocationArrow className='location-icon'/>
            </div>
        </div>
        <div className='flex items-center justify-center text-6xl my-4'>22<span>°</span></div>
    </div>
  )
}

export default WeatherLocationAndTemperature