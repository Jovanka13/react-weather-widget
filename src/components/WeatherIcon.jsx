import React, { useState } from 'react';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';

const icons = {
    '01d': clear_icon,
    '01n': clear_icon,
    '02d': cloud_icon,
    '02n': cloud_icon,
    '03d': drizzle_icon,
    '03n': drizzle_icon,
    '04d': drizzle_icon,
    '04n': drizzle_icon,
    '09d': rain_icon,
    '09n': rain_icon,
    '10d': rain_icon,
    '10n': rain_icon,
    '13d': snow_icon,
    '13n': snow_icon,
}

function WeatherIcon(props) {
    console.log(props);

    const [wicon, setWicon] = useState(icons[props.weather?.weather[0].icon] || clear_icon);

    return (
        <div className='flex flex-col items-center justify-center my-14'>
            <img
                src={icons[props.weather?.weather[0].icon]}
                className={`weather-image ${wicon === icons[props.weather?.weather[0].icon] ? 'active' : ''}`}
                style={{ width: '97px', height: '97px' }}
            />
        </div>
    )
}

export default WeatherIcon
