import React from "react";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="flex flex-row w-[262px] h-[30px] items-center justify-between">
      <Text text="Projects️" variant="PageTitle" />
      <Icon icon="add" size={20} />
    </div>
  );
};

export default SideBar;
