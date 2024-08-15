import { Task } from "@/entities/Task";
import Text from "../Text/Text";
import React from "react";
import Icon, { IconProps } from "../Icon/Icon";

type Props = {
  comments: Task["comments"];
  icon: IconProps["icon"];
};

const CommentsViewer = ({ comments, icon }: Props) => {
  const countComments = comments.length.toString();
  return (
    <div className="flex flex-row gap-1 items-center">
      <Icon icon={icon} size={16} />
      <Text text={countComments} variant="optionSelected" />
    </div>
  );
};

export default CommentsViewer;
