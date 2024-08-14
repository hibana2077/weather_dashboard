import React from 'react';
import { Card } from "@/components/ui/card"
import { Cloud, Sun, Droplets } from 'lucide-react';

const API_URL = 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=TOKEN&format=JSON&elementName=MaxT';

const WeatherIcon = ({ temp }: { temp: number }) => {
  if (temp >= 30) return <Sun className="h-8 w-8 text-yellow-500" />;
  if (temp >= 20) return <Cloud className="h-8 w-8 text-gray-500" />;
  return <Droplets className="h-8 w-8 text-blue-500" />;
};

const WeatherCard = ({ city, temp }: { city: string, temp: number }) => (
  <Card className="flex flex-col items-center justify-center p-4 h-full
                   transition-all duration-300 ease-in-out
                   hover:shadow-lg hover:scale-105 hover:bg-gradient-to-br from-blue-100 to-teal-100
                   cursor-pointer">
    <h2 className="text-xl font-bold mb-2 transition-colors duration-300 hover:text-blue-600">{city}</h2>
    <div className="transition-transform duration-300 hover:rotate-12">
      <WeatherIcon temp={temp} />
    </div>
    <p className="text-3xl font-bold my-2 transition-all duration-300 hover:text-teal-600 hover:scale-110">{temp}°C</p>
  </Card>
);

const StyledTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center mb-8">
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-full shadow-lg
                    transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
      <h1 className="text-3xl font-bold">{children}</h1>
    </div>
  </div>
);

async function getWeatherData() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.records.location.map((location: any) => ({
      city: location.locationName,
      temp: parseInt(location.weatherElement[0].time[0].parameter.parameterName)
    }));
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    return [];
  }
}

export default async function WeatherDashboard() {
  const weatherData = await getWeatherData();

  return (
    <div className="p-4">
      <StyledTitle>各地區天氣</StyledTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {weatherData.map((data: { city: string, temp: number }, index: number) => (
          <WeatherCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}