import React from "react";
import Button from "../Button/Button";
import type { ButtonProps } from "../Button/Button";

interface Props extends ButtonProps {
  isLoading: boolean;
}

const LoadableButton = ({ isLoading, ...props }: Props) => {
  return <Button {...props} label={isLoading ? "Loading..." : props.label} />;
};

export default LoadableButton;
