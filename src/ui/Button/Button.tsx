import clsx from "clsx";
import React from "react";

export type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
};

const Button = ({ label, variant }: ButtonProps) => {
  const baseClass = "text-white font-semibold";
  const combinedClasses = clsx(baseClass, {
    "py-3 px-6 bg-titleColor text-white rounded-full font-semibold":
      variant === "primary",
    "bg-blue bg-hoverBlue text-white font-bold py-2 px-4 rounded":
      variant === "secondary",
  });
  return <button className={combinedClasses}>{label}</button>;
};

export default Button;
