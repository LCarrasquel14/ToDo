import React, { useState } from "react";
import { CgMenuRound } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

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
      <CgMenuRound
        className={`cursor-pointer ${showMenu ? "hidden" : "block"} size-7`}
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && (
        <div className="absolute">
          <ul className="flex flex-col right-0 border rounded w-[100px] p-5">
            {options.map((option: OptionProps, index: number) => (
              <ol onClick={() => onOptionClicked(option.key)} key={option.key}>
                <span className="font-exo2 text-titleColor text-subtitle cursor-pointer">
                  {option.label}
                </span>
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
