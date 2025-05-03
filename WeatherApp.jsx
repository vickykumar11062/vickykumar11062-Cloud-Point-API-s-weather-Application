import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
// import "./WeatherApp.css"; // Optional: Add a CSS file for styling

function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "",
    feelsLike: 0,
    temp: 0,
    tempMin: 0,
    tempMax: 0,
    humidity: 0,
    weather: "",
  });
  const [error, setError] = useState(null);

  // Fetch default weather data for a city (e.g., Delhi) when the app loads
  useEffect(() => {
    fetchDefaultWeather("Delhi");
  }, []);

  const fetchDefaultWeather = async (city) => {
    try {
      const API_URL = "https://api.openweathermap.org/data/2.5/weather";
      const API_KEY = "684e0c34583e01a1d004515b77c9365f";
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        throw new Error(data.message);
      }

      setWeatherInfo({
        city: data.name,
        feelsLike: data.main.feels_like,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        weather: data.weather[0].description,
      });
      setError(null); // Clear any previous errors
    } catch (err) {
      setError("Failed to fetch default weather data. Please try again later.");
    }
  };

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
    setError(null); // Clear any previous errors
  };

  return (
    <div className="WeatherApp" style={{ textAlign: "center" }}>
      <h1>Weather App by Vicky</h1>
      <SearchBox updateInfo={updateInfo} setError={setError} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
