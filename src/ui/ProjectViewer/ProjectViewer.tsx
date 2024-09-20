import { List } from "@/entities/List";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import React from "react";
import ListViewer from "../ListViewer/ListViewer";
import { list } from "postcss";

type Props = {
  listInfo: List[];
};

const ProjectViewer = ({ listInfo }: Props) => {
  const [projectInfo, setProjectInfo] = React.useState(listInfo);
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const taskToMove = projectInfo
      .find((list) => list.tasks.find((task) => task.id === active.id))
      ?.tasks.find((task) => task.id === active.id);
    const oldListId = taskToMove?.listId;
    if (taskToMove?.listId) {
      taskToMove.listId = over?.id !== undefined ? over.id.toString() : "";
    }
    if (over && oldListId !== over?.id) {
      if (taskToMove) {
        const newProjectInfo = projectInfo.map((list) => {
          if (list.id === over.id) {
            return {
              ...list,
              tasks: [...list.tasks, taskToMove],
            };
          }
          if (list.tasks.some((task) => task.id === active.id)) {
            return {
              ...list,
              tasks: list.tasks.filter((task) => task.id !== active.id),
            };
          }
          return list;
        });
        setProjectInfo(newProjectInfo);
      }
    }
  };
  return (
    <ul className="py-5 px-8 bg-gradient-to-r from-bgOption to-white flex flex-row gap-[14px]">
      <DndContext onDragEnd={handleDragEnd}>
        {projectInfo.map((list) => (
          <ListViewer key={list.id} tasksContainer={list} listOption={[]} />
        ))}
      </DndContext>
    </ul>
  );
};

export default ProjectViewer;
