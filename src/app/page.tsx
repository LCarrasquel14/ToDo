import React from "react";
import { tagProps } from "@/ui/Tag/Tag";
import { IconProps } from "@/ui/Icon/Icon";
import Tag from "@/ui/Tag/Tag";

type Button = {
  label: string;
  icon: IconProps["icon"];
  id: string;
  selected: boolean;
};

const Page = () => {
  const tagContainer: tagProps[] = [
    {
      label: "Board view",
      key: "1",
      selected: true,
      icon: "board",
    },
    {
      label: "Add view",
      key: "2",
      selected: false,
      icon: "add",
    },
  ];
  return (
    <div>
      <Tag tagContainer={tagContainer} />
    </div>
  );
};

export default Page;
