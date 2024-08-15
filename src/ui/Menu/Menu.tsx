"use client";
import React, { useState } from "react";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";

export interface OptionProps {
  label: string;
  key: string;
}
interface MenuProps {
  options: OptionProps[];
  onOptionClicked: (id: string) => void;
}

// TODO: the position of the menu should come by parameter or set automatically

const Menu = ({ options, onOptionClicked }: MenuProps) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="h-9 flex flex-row relative">
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
          <ul className="flex flex-col bg-white border-bgOption border-2 rounded-lg w-[100px] h-auto p-[10px] top-0 right-5 items-start absolute">
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
