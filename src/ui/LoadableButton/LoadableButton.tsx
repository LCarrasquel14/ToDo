import React from "react";
import Button from "../Button/Button";

type Props = {
  isLoading: boolean;
  label: string;
  variant?: string;
};

const LoadableButton = ({ isLoading, label, variant }: Props) => {
  return <Button label={isLoading ? "Loading..." : label} variant={variant} />;
};

export default LoadableButton;
