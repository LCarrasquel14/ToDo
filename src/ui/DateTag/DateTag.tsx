import React from "react";
import Text from "../Text/Text";
import clsx from "clsx";

type Props = {
  date: Date;
  variant?: "primary" | "secondary";
};

const Date = ({ date, variant }: Props) => {
  const formatDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const baseClass = "inline-block w-auto py-2 px-3 rounded-full font-semibold";
  const combinedClasses = clsx(baseClass, {
    "bg-bgOption": variant === "primary",
    "bg-deadline": variant === "secondary",
  });
  return (
    <div className={combinedClasses}>
      <Text
        text={formatDate}
        variant={variant === "primary" ? "option" : "deadline"}
      />
    </div>
  );
};

export default Date;
