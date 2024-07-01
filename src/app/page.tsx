import Button from "@/ui/Button/Button";
import Menu from "@/ui/Menu/Menu";
import React from "react";
import { options } from "../data/menu";
import Navigation from "@/ui/Navigation/Navigation";

const page = () => {
  const onOptionClicked = (id: string) => {
    alert(id);
  };

  const onOptionSelected = (id: string) => {
    console.log(`selected ${id}`);
  };

  return (
    <div>
      <Button label="New template" />

      <Menu options={options} onOptionClicked={onOptionClicked} />
      <Navigation
        title="Projects"
        options={options}
        onOptionSelected={onOptionSelected}
      />
    </div>
  );
};

export default page;
