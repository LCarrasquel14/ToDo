"use client";
import { Dispatch, SetStateAction } from "react";
import Icon, { IconProps } from "../Icon/Icon";
import Text from "../Text/Text";

export type Button = {
  label: string;
  icon: IconProps["icon"];
  id: string;
  selected: boolean;
};
type Props = {
  buttons: [Button, Button];
  handleButtonClick: (id: string) => void;
};

const Toggle = ({ buttons, handleButtonClick }: Props) => {
  const baseClass =
    "flex flex-row items-center justify-center gap-2 rounded-full grow w-[127px] h-[34px] cursor-pointer";

  return (
    <div className="bg-toggleContainer rounded-full flex flex-row items-center justify-around w-[262px] h-[42px] px-1">
      {buttons.map((button) => (
        <div
          key={button.id}
          onClick={() => handleButtonClick(button.id)}
          className={`${baseClass} ${button.selected && "bg-light shadow-lg shadow-indigo-500/40 "}`}
        >
          <Icon icon={button.icon} size={20} />
          <Text
            text={button.label}
            variant={`${button.selected ? "optionSelected" : "option"}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Toggle;
