"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
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
        <div className="absolute">
          <ul className="flex flex-col right-0 border rounded w-[100px] p-5">
            {options.map((option: OptionProps) => (
              <ol onClick={() => onOptionClicked(option.key)} key={option.key}>
                <Text variant="titleCard" text={option.label} />
              </ol>
            ))}
          </ul>
          <AiOutlineClose
            className="cursor-pointer relative top-[-110px] right-[-80px]"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      )}
    </div>
  );
};

export default Menu;
