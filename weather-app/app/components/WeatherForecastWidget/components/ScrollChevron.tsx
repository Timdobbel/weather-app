"use-client";
import React from "react";
import { ChevronRight } from "../../svg";

interface Props {
  direction: "right" | "left";
  scrollRef: React.RefObject<HTMLDivElement>;
}

const SCROLL_AMOUNT = 350;

export default function ScrollChevron({ direction, scrollRef }: Props) {
  const handleScroll = () => {
    if (scrollRef?.current) {
      scrollRef?.current?.scrollBy({
        left: direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
        behavior: "smooth",
      });
    }
  };

  return (
    <ChevronRight
      className={`${direction === "left" && "-rotate-180"} text-[40em] my-auto max-h-[50px] max-w-[50px] text-slate-200 hover:text-slate-300 cursor-pointer duration-200 active:bg-white rounded-lg bg-opacity-50`}
      onClick={handleScroll}
    />
  );
}
