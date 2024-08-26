import { List } from "@/entities/List";
import { useState } from "react";
import Text from "../Text/Text";
import TaskCard from "../TaskCard/TaskCard";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import React from "react";
import Icon from "../Icon/Icon";
import DropZone from "@/Components/DropZone";

type Props = {
  listViewer: List;
};

const ListViewer = ({ listViewer }: Props) => {
  const tasks = listViewer.tasks.length;
  const [isOpen, setIsOpen] = useState(false);
  const [newTask, setNewTask] = useState({});
  return (
    <div className="flex flex-col border-dashed rounded-lg border-2 border-bgOption w-[352px] px-4 py-[22px]">
      <div className="flex flex-row justify-between items-center">
        <div>
          <Text text={`${listViewer.nameList} (${tasks})`} variant="option" />
        </div>
        <div
          className="flex flex-row gap-[6px] cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Icon icon="add" size={18} className="cursor-pointer" />
          <Text text="Add new task" variant="optionSelected" />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {listViewer.tasks.map((task) => (
          <TaskCard
            key={task.id}
            taskInfo={task}
            onEdit={() => {}}
            onDelete={() => {}}
          />
        ))}
        <DropZone />
      </div>
      <AddTaskModal
        isOpen={isOpen}
        onAddTask={setNewTask}
        listOption={[
          { label: "List 1", value: "1", id: "1" },
          { label: "List 2", value: "2", id: "2" },
        ]}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default ListViewer;
