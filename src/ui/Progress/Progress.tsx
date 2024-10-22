"use client";
import React from "react";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import Bar from "../../Components/bar";
type Props = {
  maxLimit: number;
  progress: number;
};

const Progress = ({ maxLimit, progress }: Props) => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className="w-[280px] h-[30px]">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center gap-1">
          <i
            onClick={() => setShowMenu(!showMenu)}
            className="cursor-pointer mt-[7px]"
          >
            {" "}
            <Icon icon="tasks" size={16} />
          </i>
          <Text variant="option" text="Progress" className="pt-2" />
        </div>
        <span>
          <Text text={`${progress}/${maxLimit}`} variant="optionSelected" />
        </span>
      </div>
      <Bar progress={progress} maxLimit={maxLimit} />
    </div>
  );
};

export default Progress;
