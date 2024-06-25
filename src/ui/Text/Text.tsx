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
    | "optionSelected";
};

const Text = ({ text, tag = "span", variant }: Props) => {
  const baseClass = "font-exo2";
  const combinedClasses = clsx(baseClass, {
    "text-titleColor text-PageTitle": variant === "PageTitle",
    "text-titleColor text-title": variant === "title",
    "text-subtitleColor text-subtitle": variant === "subtitle",
    "text-titleColor text-subtitle ": variant === "titleCard",
    "text-subtitleColor text-description": variant === "descriptionCard",
    "text-subtitleColor text-option": variant === "option",
    "text-titleColor text-option": variant === "optionSelected",
  });

  return createElement(tag, { className: `${combinedClasses} ` }, `${text}`);
};

export default Text;
