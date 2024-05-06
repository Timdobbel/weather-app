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

// Function to group intervals by day
// function groupByDay(intervals: Interval[]): Record<string, Interval[]> {
//   const grouped: Record<string, Interval[]> = {};

//   intervals.forEach((interval) => {
//     const date = parseISO(interval.startTime).toISOString().split("T")[0]; // Extract date part
//     if (!grouped[date]) {
//       grouped[date] = [];
//     }
//     grouped[date].push(interval);
//   });

//   return grouped;
// }

export default function WeatherForecastWidget({ data }: Props) {
  const currentDay = useRef<string>(null);

  return (
    <Widget name="Forecast widget">
      <div
        className="flex space-x-10 overflow-x-scroll"
        style={{ WebkitScrollbarWidth: "none", scrollbarWidth: "none" }}
      >
        {data.map((hour, index) => (
          <div className="flex flex-col items-center justify-between drop-shadow-md">
            <span className="text-lg font-light">
              {index === 0 ? "Now" : hour.time.hour}
            </span>
            <Image
              src={"https://cdn-icons-png.flaticon.com/512/252/252035.png"}
              height={50}
              width={50}
              alt={"cloud"}
            />
            <span className="text-2xl">{hour.values.temperature}°</span>
          </div>
        ))}
      </div>
      {/* <WeatherIcon temperature={0} /> */}
    </Widget>
  );
}
