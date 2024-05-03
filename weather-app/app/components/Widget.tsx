import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Widget({ children }: Props) {
  return (
    <div className="flex justify-between w-full bg-slate-400 rounded-3xl shadow-md p-6">
      {children}
    </div>
  );
}
