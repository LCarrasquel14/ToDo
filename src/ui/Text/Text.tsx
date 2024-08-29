import { createElement } from "react";
import { clsx } from "clsx";

type Props = {
  text: string;
  tag?: keyof JSX.IntrinsicElements;
  variant?:
    | "PageTitle"
    | "title"
    | "subtitle"
    | "titleCard"
    | "descriptionCard"
    | "option"
    | "optionSelected"
    | "deadline";
  size?: number;
  className?: string;

  onClick?: () => void;
};

const Text = ({ text, tag = "span", variant, size, className }: Props) => {
  const baseClass = `exo2-700 font-bold text-[${size ? size : 16}px] ${className}`;
  const combinedClasses = clsx(baseClass, {
    "text-titleColor text-PageTitle": variant === "PageTitle",
    "text-titleColor text-title": variant === "title",
    "text-subtitleColor text-subtitle": variant === "subtitle",
    "text-titleColor text-subtitle ": variant === "titleCard",
    "text-subtitleColor text-description": variant === "descriptionCard",
    "text-subtitleColor text-option": variant === "option",
    "text-titleColor text-option": variant === "optionSelected",
    "text-red text-option": variant === "deadline",
  });

  return createElement(
    tag,
    {
      className: `${combinedClasses} `,
    },
    `${text}`
  );
};

export default Text;
