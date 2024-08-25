import Text from "@/ui/Text/Text";
import React from "react";

type Props = {};

const DropZone = (props: Props) => {
  return (
    <div className="grid place-items-center h-[190px] border-2 border-bgOption rounded-xl p-5 w-[320px]">
      <Text text="Drag your task here..." variant="subtitle" />
    </div>
  );
};

export default DropZone;
