"use client";
import { useState, useEffect } from "react";

interface WeatherData {
  name: string;
  main?: {
    temp: number;
    humidity: number;
  };
  weather?: { description: string }[];
  wind?: { speed: number };
}

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setCity] = useState<string>("Karachi");

  // const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch
          (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3181c732432941ab5232504df31a4509`)
        ;
        const data: WeatherData = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-500">
      <div className="flex flex-col items-center bg-white text-gray-900 p-6 rounded-lg shadow-xl w-80">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Weather Widget</h2>

        <input
          type="text"
          placeholder="Enter city..."
          className="px-4 py-2 rounded-md border border-gray-300 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        {weather && weather.main && weather.weather && weather.weather.length > 0 ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">{weather.name}</h3>
            <p className="text-lg capitalize text-gray-600">{weather.weather[0].description}</p>
            <p className="text-3xl font-bold text-blue-500">{weather.main.temp}°C</p>
            <p className="text-gray-700">Humidity: {weather.main.humidity}%</p>
            <p className="text-gray-700">Wind: {weather.wind?.speed ?? 0} m/s</p>
          </div>
        ) : (
          <p className="text-gray-600">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherWidget;
