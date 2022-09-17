import { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await (await fetch('/api/weather')).json();
        setWeather(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="wrapper">
      <h2>Current weather</h2>
      {loading && <div>Your weather is loading...</div>}
      {error && <div>{`Problem fetching the weather data - ${error}`}</div>}
      <div className="stories-wrapper">
        {weather && weather.temp &&
          <div className='weather-desc'>
            <h3>Weather in {weather.city} : Temprature is {weather.temp}, min temp: {weather.min_temp}, max temp: {weather.max_temp} </h3>
          </div>                        
        }
      </div>
    </div>
  );
};

export default Weather;
