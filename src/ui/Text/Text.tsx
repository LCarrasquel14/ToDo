import { createElement } from "react";
import { clsx } from "clsx";

type Props = {
  text: string;
  tag?: keyof JSX.IntrinsicElements;
  variant?: "nameProyect" | "title" | "subtitle" | "paragraph";
};

const Text = ({ text, tag = "span", variant = "nameProyect" }: Props) => {
  const baseClass = "font-exo2";
  const combinedClasses = clsx(baseClass, {
    "text-title text-3xl font-bold": variant === "nameProyect",
    "text-title text-sm font-bold": variant === "title",
    "text-subtitle text-sm font-semibold": variant === "subtitle",
    "text-subtitle text-xs font-semibold": variant === "paragraph",
  });

  return createElement(tag, { className: `${combinedClasses} ` }, `${text}`);
};

export default Text;
