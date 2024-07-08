import React from "react";
import Icon, { IconProps } from "../Icon/Icon";
import Text from "../Text/Text";

type Button = {
  label: string;
  icon: IconProps["icon"];
  id: string;
};
type Props = {
  buttons: [Button, Button];
  onToggle: () => void;
  selected: boolean;
};

const Toggle = ({ onToggle, selected, buttons }: Props) => {
  return (
    <div>
      {buttons.map((button) => (
        <div
          key={button.id}
          onClick={() => onToggle()}
          className="flex flex-row items-center gap-2"
        >
          <Icon icon={button.icon} size={24} />
          <Text text={button.label} variant="subtitle" />
        </div>
      ))}
    </div>
  );
};

export default Toggle;
