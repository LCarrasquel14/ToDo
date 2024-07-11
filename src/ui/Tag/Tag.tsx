import Icon from "../Icon/Icon";
import Text from "../Text/Text";
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

const Tag = ({ tagContainer }: TagProps) => {
  const handleBoardView = (id: string) => {
    console.log(`selected ${id}`);
  };
  return (
    <ul className="flex gap-4 h-9">
      {tagContainer.map((tag) => (
        <li
          key={tag.key}
          className={`flex items-center gap-2 cursor-pointer ${tag.selected && "border-b-2 border-indigo-500"}`}
          onClick={() => handleBoardView(tag.key)}
        >
          <Icon icon={tag.icon} size={14} />
          <Text
            variant={tag.selected ? "optionSelected" : "option"}
            text={tag.label}
          />
        </li>
      ))}
    </ul>
  );
};

export default Tag;
