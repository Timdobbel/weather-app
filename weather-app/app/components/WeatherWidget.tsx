import React from "react";
import Widget from "./Widget";

interface Props {}

export default function WeatherWidget({}: Props) {
  return (
    <>
      <Widget>
        <div className="w-full flex flex-col text-slate-700">
          <span className="text-xl ">Groningen</span>
          <span className="text-4xl">60°C</span>
        </div>
        <div className="flex flex-col justify-end text-right text-slate-700">
          <span className="">Sunny</span>
          <span className="">H:69°</span>
          <span className="">L:51°</span>
        </div>
      </Widget>
      <span className="text-slate-600 text-sm">Weather</span>
    </>
  );
}
