import React from 'react';
import './WeatherDetails.css';

function WeatherDetails() {
  return (
    <div className='flex flex-row items-center justify-between weather-details-container'>
      <div className='flex flex-col items-center justify-center'>
        <p className='details-title font-light text-sm'>TIME</p>
        <p className='details-paragraph font-medium'>11:25 AM</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <p className='details-title font-light text-sm'>UV</p>
        <p className='details-paragraph font-medium'>4</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <p className='details-title font-light text-sm'>%RAIN</p>
        <p className='details-paragraph font-medium'>58%</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <p className='details-title font-light text-sm'>AQ</p>
        <p className='details-paragraph font-medium'>22</p>
      </div>
    </div>

  );
}

export default WeatherDetails