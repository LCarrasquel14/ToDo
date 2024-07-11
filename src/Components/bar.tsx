import React from "react";
import clsx from "clsx";

type Props = {
  progress: number;
  maxLimit: number;
  validate?: boolean;
};

const PercentageBar = ({ progress, maxLimit, validate }: Props) => {
  const barPercentage = Math.round((progress / maxLimit) * 100)
    .toString()
    .concat("%");
  const percentage = Math.round((progress / maxLimit) * 100);
  const baseClass = `h-full max-w-full`;
  const combinated = clsx(baseClass, {
    "bg-initial": percentage < 33,
    "bg-medium": percentage >= 33 && percentage < 66,
    "bg-almostCompleted": percentage >= 66 && percentage < 100,
    "bg-finish": percentage === 100,
  });
  return validate ? (
    <div className="h-1 w-full border mt-2 bg-option">
      <div className={combinated} style={{ width: barPercentage }}></div>
    </div>
  ) : null;
};

export default PercentageBar;
