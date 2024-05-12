"use-client";
import React from "react";
import { ChevronRight } from "../../svg";

interface Props {
  direction: "right" | "left";
  scrollRef: React.RefObject<HTMLDivElement>;
}

const SCROLL_AMOUNT = 350;

export default function ScrollChevron({ direction, scrollRef }: Props) {
  // Function to scroll to a specific time section
  const scrollRight = () => {
    if (scrollRef?.current) {
      scrollRef?.current?.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <ChevronRight
      className={`${direction === "left" && "-rotate-180"} text-[40em] my-auto max-h-[50px] max-w-[50px] text-slate-200 hover:text-slate-300 cursor-pointer duration-200 active:bg-white rounded-lg bg-opacity-50`}
      onClick={scrollRight}
    />
  );
}
