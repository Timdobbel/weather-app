import React from "react";
import Widget from "./Widget";

interface Props {
  city: string;
}

export default function WeatherWidget({ city }: Props) {
  return (
    <Widget name="Weather">
      <div className="flex flex-col justify-between drop-shadow-md">
        <p className="text-xl ">{city}</p>
        <span className="text-4xl">60°C</span>
      </div>
      <div className="flex flex-col justify-end text-right drop-shadow-md">
        <span>Sunny</span>
        <span>H:69°</span>
        <span>L:51°</span>
      </div>
    </Widget>
  );
}
