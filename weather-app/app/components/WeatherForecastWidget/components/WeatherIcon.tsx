"use-client";
import React from "react";
import {
  Cloud,
  CloudNight,
  CloudSun,
  FogMoon,
  RainSun,
  SunWind,
} from "../../svg";

interface Props {
  weatherCode?: number;
  temperature?: number;
}

const defaultClass = "text-5xl text-yellow-500";

// So ideally we would want to use the weather codes on: https://docs.tomorrow.io/reference/data-layers-weather-codes
// Since this would be a lot of work I decided to just use the temperate to show an icon.
export default function WeatherIcon({ temperature }: Props) {
  if (!temperature) return <>-</>;

  if (temperature < 9) {
    return <FogMoon className={defaultClass} />;
  } else if (temperature < 15) {
    return <CloudNight className={defaultClass} />;
  } else if (temperature < 15) {
    return <Cloud className={defaultClass} />;
  } else if (temperature < 17) {
    return <RainSun className={defaultClass} />;
  } else if (temperature < 22) {
    return <SunWind className={defaultClass} />;
  }
  return <CloudSun className={defaultClass} />;
}
