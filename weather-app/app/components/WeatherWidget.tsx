import React from "react";
import Widget from "./Widget";
import { Forecast } from "../interfaces/common";
import { getWeatherCodeValue } from "./WeatherForecastWidget/weatherCodes";

interface Props {
  city: string;
  data: Forecast[];
}

const findMinMaxTemperatures = (data: Forecast[]) => {
  // Filter data for the first day
  const firstDayData = data.filter(
    (forecast) => forecast.time.day === data[0].time.day
  );

  // Find the highest and lowest temperatures
  const minTemperature = firstDayData.reduce(
    (min, current) => Math.min(min, current?.values?.temperature as number),
    Number.MAX_VALUE
  );
  const maxTemperature = firstDayData.reduce(
    (max, current) => Math.max(max, current?.values?.temperature as number),
    Number.MIN_VALUE
  );

  return { minTemperature, maxTemperature };
};

export default function WeatherWidget({ city, data }: Props) {
  const { minTemperature, maxTemperature } = findMinMaxTemperatures(data);
  const today = data[0]?.values;
  const weatherCodeValue = getWeatherCodeValue(today?.weatherCode?.toString());

  return (
    <Widget name="Weather">
      <div className="flex flex-col justify-between drop-shadow-md">
        <p className="text-xl ">{city}</p>
        <span className="text-4xl">{today?.temperature}°C</span>
      </div>
      <div className="flex flex-col justify-end text-right drop-shadow-md">
        <span>{weatherCodeValue}</span>
        <span>H:{maxTemperature}°</span>
        <span>L:{minTemperature}°</span>
      </div>
    </Widget>
  );
}
