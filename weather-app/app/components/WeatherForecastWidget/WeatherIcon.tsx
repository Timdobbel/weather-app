import React from "react";
import WeatherIconSvg from "../svg/weatherIcons/cloud-sun.svg";
// import WeatherIconSvg from " ../../../public/weatherIcons/cloud-sun.svg";
import Image from "next/image";

interface Props {
  weatherCode?: number;
}

export default function WeatherIcon({ weatherCode }: Props) {
  if (!weatherCode) return;

  if (weatherCode > 19 && weatherCode < 22) {
    return <img src="public/weatherIcons/cloud-sun.svg" />;
  } else {
    return (
      // <Image
      //   src={"https://cdn-icons-png.flaticon.com/512/252/252035.png"}
      //   height={50}
      //   width={50}
      //   alt={"cloud"}
      // />
      <WeatherIconSvg />
    );
  }
}
