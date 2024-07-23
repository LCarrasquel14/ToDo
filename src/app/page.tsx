import Button from "@/ui/Button/Button";
import React, { useEffect } from "react";
import Toggle from "@/ui/Toggle/Toggle";
import { IconProps } from "@/ui/Icon/Icon";

type Button = {
  label: string;
  icon: IconProps["icon"];
  id: string;
  selected: boolean;
};

const Page = () => {
  const [buttonSelected, setButtonSelected] = React.useState<[Button, Button]>([
    {
      label: "Light",
      icon: "lightmode",
      id: "1",
      selected: true,
    },
    {
      label: "Dark",
      icon: "darkmode",
      id: "2",
      selected: false,
    },
  ]);
  const handleButtonClick = (id: string) => {
    setButtonSelected((prevState) => {
      const newButtons = prevState.map((button) => {
        if (button.id === id) {
          return { ...button, selected: true };
        } else {
          return { ...button, selected: false };
        }
      });
      return [newButtons[0], newButtons[1]];
    });
  };
  useEffect(() => {
    console.log({ buttonSelected });
  }, [buttonSelected]);

  return (
    <div>
      <Toggle buttons={buttonSelected} handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default Page;
