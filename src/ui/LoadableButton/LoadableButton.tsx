import React from "react";
import Button from "../Button/Button";

type Props = {
  isLoading: boolean;
};

const LoadableButton = ({ isLoading }: Props) => {
  return (
    <Button
      label={!isLoading ? "Loading..." : "LoadableButton"}
      variant="secondary"
    />
  );
};

export default LoadableButton;
