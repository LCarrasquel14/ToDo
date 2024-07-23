"use client";
import React, { useState } from "react";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";

export interface OptionProps {
  label: string;
  key: string;
  selected: boolean;
}
interface MenuProps {
  options: OptionProps[];
  onOptionClicked: (id: string) => void;
}

const Menu = ({ options, onOptionClicked }: MenuProps) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-[259px] h-9 flex flex-row relative">
      <i
        onClick={() => setShowMenu(!showMenu)}
        className={`cursor-pointer w-[26px] h-[26px] ${showMenu && "hidden"}`}
      >
        <Icon icon="threePoints" size={26} />
      </i>
      {showMenu && (
        <div className="flex flex-row relative">
          <i onClick={() => setShowMenu(!showMenu)} className="cursor-pointer">
            <Icon icon="close" size={20} />
          </i>
          <ul className="flex flex-col border rounded w-[100px] h-[98px] p-[10px] top-[20px] right-[-95px] items-start absolute">
            {options.map((option: OptionProps) => (
              <li onClick={() => onOptionClicked(option.key)} key={option.key}>
                <Text variant="titleCard" text={option.label} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
