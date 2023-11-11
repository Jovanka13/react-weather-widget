import React from 'react';
import './WeatherDetails.css';

function WeatherDetails(props) {
    const getWeatherTime = () => {
        const time = new Date(props?.weather?.dt * 1000).toTimeString();
        const splitTime = time.split(":");

        return [splitTime[0], splitTime[1]].join(":")
    }

    return (
        <div className='flex flex-row items-center justify-between weather-details-container'>
            <div className='flex flex-col items-center justify-center'>
                <p className='details-title font-light text-sm'>TIME</p>
                <p className='details-paragraph font-medium'>{getWeatherTime()}</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='details-title font-light text-sm'>FEELS LIKE</p>
                <p className='details-paragraph font-medium'>Math.floor({props.weather?.main?.feels_like}) °</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='details-title font-light text-sm'>HUMIDITY</p>
                <p className='details-paragraph font-medium'>{props.weather?.main?.humidity} %</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='details-title font-light text-sm'>WIND SPEED</p>
                <p className='details-paragraph font-medium'>Math.floor({props.weather?.wind?.speed}) m/s</p>
            </div>
        </div>

    );
}

export default WeatherDetails
