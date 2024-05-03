import React from "react";
import Widget from "../Widget";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastWidget() {
  return (
    <Widget name="WeatherForecastWidget">
      <div>WeatherForecastWidget</div>
      <WeatherIcon temperature={0} />
    </Widget>
  );
}
