import React from 'react';

function WeatherDetails(props) {
    const getWeatherTime = () => {
        const time = new Date(props?.weather?.dt * 1000).toTimeString();
        const splitTime = time.split(":");

        return [splitTime[0], splitTime[1]].join(":")
    }

    return (
        <div className='flex flex-row items-center justify-between rounded-lg bg-[#FDFCFC] px-5 py-1'>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-[#C4C4C4] font-medium text-xs'>TIME</p>
                <p className='text-[#9A9A9A] text-sm font-medium'>{getWeatherTime()}</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-[#C4C4C4] font-medium text-xs'>FEELS LIKE</p>
                <p className='text-[#9A9A9A] text-sm font-medium'>{Math.floor(props.weather?.main?.feels_like)} °</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-[#C4C4C4] font-medium text-xs'>HUMIDITY</p>
                <p className='text-[#9A9A9A] text-sm font-medium'>{props.weather?.main?.humidity} %</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-[#C4C4C4] font-medium text-xs'>WIND SPEED</p>
                <p className='text-[#9A9A9A] text-sm font-medium'>{Math.floor(props.weather?.wind?.speed)} m/s</p>
            </div>
        </div>

    );
}

export default WeatherDetails
