import React, { ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
}

export default function Widget({ name, children }: Props) {
  return (
    <div className="min-w-60 w-full flex flex-col items-center gap-2 text-white">
      <div className="flex justify-between w-full bg-gradient-to-b from-sky-600 to-blue-300 rounded-3xl shadow-2xl p-6">
        {children}
      </div>
      <span className=" text-sm opacity-80">{name}</span>
    </div>
  );
}
