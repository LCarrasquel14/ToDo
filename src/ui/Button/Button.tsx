import React from "react";

type Props = {
  label: string;
};

const Button = ({ label }: Props) => {
  return (
    <button className="py-3 px-6 bg-titleColor text-white rounded-full font-semibold">
      {label}
    </button>
  );
};

export default Button;
