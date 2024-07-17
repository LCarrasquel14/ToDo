"use client";
import React from "react";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import PercentageBar from "@/Components/Bar";
type Props = {
  maxLimit: number;
  progress: number;
};

const Progress = ({ maxLimit, progress }: Props) => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className="w-[280px] h-[30px]">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
          <i
            onClick={() => setShowMenu(!showMenu)}
            className="cursor-pointer mt-[7px]"
          >
            {" "}
            <Icon icon="tasks" size={16} />
          </i>
          <Text variant="subtitle" text="progress" />
        </div>
        <span>
          <Text text={`${progress}/${maxLimit}`} variant="titleCard" />
        </span>
      </div>
      <PercentageBar progress={progress} maxLimit={maxLimit} />
    </div>
  );
};

export default Progress;
