import { List } from "@/entities/List";
import { useState } from "react";
import Text from "../Text/Text";
import TaskCard from "../TaskCard/TaskCard";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import React from "react";
import Icon from "../Icon/Icon";
import DropZone from "@/Components/DropZone";

type Props = {
  tasksContainer: List;
  listOption: { label: string; value: string; id: string }[];
};

const ListViewer = ({ tasksContainer, listOption }: Props) => {
  const countTasks = tasksContainer.tasks.length;
  const [isOpen, setIsOpen] = useState(false);
  const [newTask, setNewTask] = useState({});

  return (
    <div className="flex flex-col w-[360px] border-2 border-dashed border-bgOption rounded-xl py-[22px] px-[16px]">
      <div className="mb-4 h-[18px] flex flex-row justify-between">
        <Text
          text={`${tasksContainer.nameList} (${countTasks}) `}
          variant="subtitle"
        />
        <div
          className="flex flex-row gap-[6px] cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Icon icon="add" size={22} />
          <Text text="Add new task" variant="option" />
        </div>
      </div>
      <div>
        {tasksContainer.tasks.map((task) => (
          <TaskCard
            key={task.id}
            taskInfo={task}
            listOption={listOption}
            onEdit={() => {}}
            onDelete={() => {}}
          />
        ))}
      </div>
      <DropZone />
      <AddTaskModal
        isOpen={isOpen}
        onAddTask={setNewTask}
        onClose={() => setIsOpen(false)}
        listOption={listOption}
      />
    </div>
  );
};

export default ListViewer;
