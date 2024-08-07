import React from "react";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";

interface optionProps {
  label: string;
  key: string;
  selected: boolean;
}

type Props = {
  title: string;
  options: optionProps[];
  onOptionSelected: (id: string) => void;
};

const Navigation = ({ title, options, onOptionSelected }: Props) => {
  const [showMenu, setShowMenu] = React.useState(false);

  const baseClass =
    "cursor-pointer flex flex-row items-center py-[10px] px-[18px] rounded-full";
  return (
    <div className="w-[261px]">
      <div className="flex flex-row items-center justify-between mb-2">
        <span className="cursor-pointer">
          <Text text={title} variant="titleCard" />
        </span>
        <i className="cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <Icon icon="arrowDown" size={18} />
          ) : (
            <Icon icon="rightArrow" size={18} />
          )}
        </i>
      </div>
      {showMenu && (
        <ul className="border-l-2 border-vector">
          {options.map((option) => (
            <div className="flex items-center mb-2" key={option.key}>
              <hr className="border-0 border-vector bg-vector h-[2px] w-[14px] mr-2" />
              <li
                className={`${baseClass} ${option.selected && "bg-bgOption"}`}
                onClick={() => onOptionSelected(option.key)}
              >
                <Text
                  text={option.label}
                  variant={option.selected ? "optionSelected" : "option"}
                />
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navigation;
function merge() {
  throw new Error("Function not implemented.");
}
