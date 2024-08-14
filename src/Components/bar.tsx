import React from "react";
import clsx from "clsx";

type Props = {
  progress: number;
  maxLimit: number;
};

const Bar = ({ progress, maxLimit }: Props) => {
  const percentage = Math.round((progress / maxLimit) * 100);
  const barPercentage = `${percentage}%`;
  const baseClass = `h-full max-w-full p-[2px] rounded-full`;
  const combinated = clsx(baseClass, {
    "bg-initial": percentage < 33,
    "bg-medium": percentage >= 33 && percentage < 66,
    "bg-almostCompleted": percentage >= 66 && percentage < 100,
    "bg-finish": percentage === 100,
  });
  return percentage <= 100 ? (
    <div className="h-1 w-full mt-2 bg-option relative">
      <div className={combinated} style={{ width: barPercentage }}></div>
      <div className="h-1 w-full mt-2 bg-bgOption p-[2px] rounded-full absolute bottom-0"></div>
    </div>
  ) : null;
};

export default Bar;
