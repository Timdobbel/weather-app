"use client";
import React, { useRef } from "react";
import Widget from "../Widget";
import WeatherIcon from "./WeatherIcon";
import { parseISO } from "date-fns";
import { Forecast } from "@/app/interfaces/common";
import Image from "next/image";

interface Props {
  data: Forecast[];
}

export default function WeatherForecastWidget({ data }: Props) {
  const currentDay = useRef<string>(null);
  // Create refs for each time section
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a specific time section
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Example usage: scrollToTime(0); // Scrolls to the first time section

  return (
    <Widget name="Forecast widget">
      <div
        ref={scrollContainerRef}
        className="flex space-x-10 overflow-x-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        {data.map((hour, index) => (
          <div className="flex flex-col items-center justify-between drop-shadow-md">
            <span className="text-lg font-light">
              {index === 0 ? "Now" : hour.time.hour}
            </span>

            <WeatherIcon key={index} weatherCode={hour.values?.weatherCode} />
            <span className="text-2xl">{hour.values.temperature}°</span>
          </div>
        ))}
      </div>
      {/* Button to scroll 200px to the right */}
      <button onClick={scrollRight}>Scroll Right</button>
    </Widget>
  );
}
