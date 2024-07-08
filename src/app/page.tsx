import Button from "@/ui/Button/Button";
import React from "react";
import Toggle from "@/ui/Toggle/Toggle";
import { IconProps } from "@/ui/Icon/Icon";

type Button = {
  label: string;
  icon: IconProps["icon"];
  id: string;
  selected: boolean;
};

const page = () => {
  const onOptionClicked = (id: string) => {
    alert(id);
  };

  const onOptionSelected = (id: string) => {
    console.log(`selected ${id}`);
  };

  return <div></div>;
};

export default page;
