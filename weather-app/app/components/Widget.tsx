import React, { ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
}

// Renders the base layout reused by all widgets. Has a gradient background and centered content.
export default function Widget({ name, children }: Props) {
  return (
    <div className="min-w-60 w-full flex flex-col items-center gap-2 text-white">
      <div className="flex justify-between w-full bg-gradient-to-b from-sky-800 to-blue-500 rounded-3xl drop-shadow-md p-6">
        {children}
      </div>
      <span className="text-lg text-white drop-shadow select-none">{name}</span>
    </div>
  );
}
