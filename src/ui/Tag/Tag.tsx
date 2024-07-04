import React from "react";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import { tags } from "@/data/tag";
import { IconProps } from "@/ui/Icon/Icon";

export type tagProps = {
  label: string;
  key: string;
  selected: boolean;
  icon: IconProps["icon"];
};

type TagProps = {
  tagContainer: tagProps[];
};

const Tag = ({ tagContainer = tags }: TagProps) => {
  return (
    <ul className="p-3 flex flex-row gap-4">
      {tagContainer.map((tag) => {
        return (
          <li key={tag.key} className="flex items-center gap-1">
            <Icon icon={tag.icon} size={14} />
            <Text
              text={tag.label}
              variant={`${tag.selected ? "optionSelected" : "option"}`}
              size={10}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Tag;
