import React from "react";
import WeatherIconSvg from "../../../public/weatherIcons/cloud-sun.svg";

interface Props {
  temperature: number;
}

export default function WeatherIcon({ temperature }: Props) {
  if (temperature > 19 && temperature < 22) {
    return <img src="public/weatherIcons/cloud-sun.svg" />;
  } else {
  }
}
