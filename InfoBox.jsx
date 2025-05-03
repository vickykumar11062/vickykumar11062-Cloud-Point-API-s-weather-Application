import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

function InfoBox({ info }) {
  // Dynamically set the image based on weather condition
  const getWeatherImage = (weather) => {
    const lowerCaseWeather = weather.toLowerCase(); // Ensure case insensitivity
    console.log("Weather condition:", lowerCaseWeather); // Debugging: Log the weather condition

    switch (lowerCaseWeather) {
      case "clear":
        return "https://images.unsplash.com/photo-1601134467661-3a775e1e5b7b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      case "clouds":
        return "https://images.unsplash.com/photo-1483977399921-6cf94f6fdc3a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      case "rain":
        return "https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      case "haze":
        return "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      default:
        return "https://images.unsplash.com/photo-1601134467661-3a775e1e5b7b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Default image for unknown weather
    }
  };

  const weatherImage = getWeatherImage(info.weather);

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={weatherImage}
            title={info.weather}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}°C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Min Temp = {info.tempMin}°C</p>
              <p>Max Temp = {info.tempMax}°C</p>
              <p>
                The weather can be described as {info.weather} and feels like{" "}
                {info.feelsLike}°C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;