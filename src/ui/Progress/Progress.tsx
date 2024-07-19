"use client";
import React from "react";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import ProgressBar from "@/Components/bar";

type Props = {
  maxLimit: number;
  progress: number;
};

const Progress = ({ maxLimit, progress }: Props) => {
  return (
    <div className="w-[280px] h-[30px]">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
          <Icon icon="tasks" size={16} className="cursor-pointer mt-[7px]" />
          <Text variant="subtitle" text="progress" />
        </div>
        <span>
          <Text text={`${progress}/${maxLimit}`} variant="titleCard" />
        </span>
      </div>
      <ProgressBar progress={progress} maxLimit={maxLimit} />
    </div>
  );
};

export default Progress;
