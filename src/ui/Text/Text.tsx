import { createElement } from "react";
import { clsx } from "clsx";
import { OptionProps } from "../Menu/Menu";

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
    | "optionSelected";
  size?: number;

  onClick?: () => void;
};

const Text = ({ text, tag = "span", variant, size }: Props) => {
  const baseClass = `font-exo2 text-[${size ? size : 16}px]`;
  const combinedClasses = clsx(baseClass, {
    "text-titleColor text-PageTitle": variant === "PageTitle",
    "text-titleColor text-title": variant === "title",
    "text-subtitleColor text-subtitle": variant === "subtitle",
    "text-titleColor text-subtitle ": variant === "titleCard",
    "text-subtitleColor text-description": variant === "descriptionCard",
    "text-subtitleColor text-option": variant === "option",
    "text-titleColor text-option": variant === "optionSelected",
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
