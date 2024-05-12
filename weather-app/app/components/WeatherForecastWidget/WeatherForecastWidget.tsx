"use client";
import React, { useRef } from "react";
import Widget from "../Widget";
import { Forecast } from "@/app/interfaces/common";
import { v4 as uuidv4 } from "uuid";
import WeatherIcon from "./components/WeatherIcon";
import ScrollChevron from "./components/ScrollChevron";

interface Props {
  data: Forecast[];
}

export default function WeatherForecastWidget({ data }: Props) {
  const currentDay = useRef<string>(null);
  // Create refs for each time section
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Example usage: scrollToTime(0); // Scrolls to the first time section

  return (
    <Widget name="Forecast widget">
      <ScrollChevron direction="left" scrollRef={scrollContainerRef} />
      <div
        ref={scrollContainerRef}
        className="flex space-x-10 overflow-x-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        {data.map((hour, index) => (
          <div
            key={uuidv4()}
            className="flex flex-col items-center justify-between drop-shadow-md select-none"
          >
            <span className="text-lg font-light">
              {index === 0 ? "Now" : hour.time.hour}
            </span>

            <WeatherIcon
              weatherCode={hour.values?.weatherCode}
              temperature={hour.values?.temperature}
            />
            <span className="text-2xl">{hour.values.temperature}°</span>
          </div>
        ))}
      </div>
      <ScrollChevron direction="right" scrollRef={scrollContainerRef} />
    </Widget>
  );
}
