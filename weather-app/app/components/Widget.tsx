import React, { ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
}

export default function Widget({ name, children }: Props) {
  return (
    <div className="w-1/2 max-w-96 min-w-60 flex flex-col items-center gap-2 text-white">
      <div className="flex justify-between w-full bg-gradient-to-b from-sky-600 to-blue-300 rounded-3xl shadow-2xl p-6">
        {children}
      </div>
      <span className=" text-sm opacity-80">{name}</span>
    </div>
  );
}
