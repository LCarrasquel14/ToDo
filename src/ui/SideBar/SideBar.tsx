import React from "react";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import Navigation from "../Navigation/Navigation";
import { options, options2 } from "@/data/menu";

const SideBar = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="flex flex-col w-[318px] border p-6">
      <div className="flex flex-row gap-4 justify-between items-center mb-7">
        <Text text="Project" variant="PageTitle" />
        <Icon icon="add" size={22} className="cursor-pointer" />
      </div>
      <div>
        <Navigation
          title="Projects"
          options={options}
          onOptionSelected={() => {}}
        />
        <Navigation
          title="tasks"
          options={options2}
          onOptionSelected={() => {}}
        />
      </div>
    </div>
  );
};

export default SideBar;
