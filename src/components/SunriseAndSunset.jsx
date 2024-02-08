import React from 'react'
import sunriseSunset from '../assets/sunrise_sunset.svg';

const SunriseAndSunset = (props) => {
  const sunriseFormat = () => {
    const time = new Date(props?.weather?.sys?.sunrise * 1000).toTimeString();
    const splitTime = time.split(":");

    return [splitTime[0], splitTime[1]].join(":")
  }

  return (
    <div className='flex flex-col mt-5 bg-[#FDFCFC] px-5 py-1 rounded-lg'>
      <div className='flex flex-col gap-5 relative'>
        <p className='text-[#C4C4C4] font-medium text-xs'>SUNRISE AND SUNSET</p>
        <img src={sunriseSunset} alt='' />
        <p className='absolute left-[30px] top-[80px] text-xs'>{sunriseFormat()}</p>
        <p className='absolute right-[30px] top-[80px] text-xs'>{sunriseFormat()}</p>
      </div>
      <div className='flex flex-col pt-10'>
        <p className='font-medium text-[#9A9A9A] text-xs'>Maximum Temperature: <span className='font-light text-[#2C2C2C] text-xs'>{Math.floor(props.weather?.main?.temp_max)} °</span></p>
        <p className='font-medium text-[#9A9A9A] text-xs'>Minimum Temperature: <span className='font-light text-[#2C2C2C] text-xs'>{Math.floor(props.weather?.main?.temp_min)} °</span></p>
      </div>
    </div>
  )
}

export default SunriseAndSunset
