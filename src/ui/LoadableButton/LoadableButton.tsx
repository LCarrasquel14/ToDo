import React from "react";
import Button from "../Button/Button";
import type { ButtonProps } from "../Button/Button";

type Props = {
  isLoading: boolean;
  label: string;
  variant?: ButtonProps["variant"];
};

const LoadableButton = ({ isLoading, label, variant }: Props) => {
  return <Button label={isLoading ? "Loading..." : label} variant={variant} />;
};

export default LoadableButton;
