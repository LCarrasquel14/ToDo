import Button from "@/ui/Button/Button";
import Menu from "@/ui/Menu/Menu";
import React from "react";
import { option } from "../data/menu";

const page = () => {
  const onOptionClicked = (id: string) => {
    alert(id);
  };
  return (
    <div>
      <Button label="New template" />

      <Menu option={option} onOptionClicked={onOptionClicked} />
    </div>
  );
};

export default page;
