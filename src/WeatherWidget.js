import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherWidget = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');
  const [temperature, setTemperature] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '048b78666f0472fc710ab69d71249f35';
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';

  const getWeather = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL, {
        params: {
          q: location,
          appid: API_KEY,
          units: 'metric', 
        },
      });
      setWeather(response.data.weather[0].main);
      setTemperature(response.data.main.temp);
      setLoading(false);
      setError('');
    } catch (error) {
      setError('Location not found.');
      setLoading(false);
    }
  };

  useEffect(() => {
    

  }, []);

  return (
    <div className="weather-widget">
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {error && <p className="error">{error}</p>}
          {weather && <p>Weather: {weather}</p>}
          {temperature && <p>Temperature: {temperature}°C</p>}
        </>
      )}
    </div>
  );
};

export default WeatherWidget;