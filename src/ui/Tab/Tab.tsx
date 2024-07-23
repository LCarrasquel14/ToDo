import React from "react";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import clsx from "clsx";

interface tabProps {
  label: string;
  id: string;
  selected: boolean;
}
type Props = {
  tabs: tabProps[];
  onTab: (id: string) => void;
};

const Tab = ({ tabs, onTab }: Props) => {
  const handleTab = (id: string) => {
    onTab(id);
  };
  return (
    <ul className="flex flex-row gap-1 h-9 border-b-2 border-vector">
      {tabs.map((tab) => (
        <li
          key={tab.id}
          onClick={() => handleTab(tab.id)}
          className={`pr-2 flex flex-row items-start justify-center gap-2 w-[137px] cursor-pointer ${tab.selected && "border-b-2 border-indigo-500"}`}
        >
          <Icon icon="board" size={16} />
          <Text
            text={tab.label}
            variant={tab.selected ? "optionSelected" : "option"}
          />
        </li>
      ))}
    </ul>
  );
};

export default Tab;
