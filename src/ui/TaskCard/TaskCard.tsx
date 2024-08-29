import { Task } from "@/entities/Task";
import Menu from "../Menu/Menu";
import Progress from "../Progress/Progress";
import Text from "../Text/Text";
import Date from "../DateTag/DateTag";
/*   import { CSS } from "@dnd-kit/utilities";
  import { Transform } from "@dnd-kit/utilities"; */
import CommentsViewer from "../CommentsViewers/CommentsViewer";

type Props = {
  taskInfo: Task;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const menuOptions = [
  {
    key: "edit",
    label: "Edit",
  },
  {
    key: "delete",
    label: "Delete",
  },
];

const TaskCard = ({ taskInfo, onEdit, onDelete }: Props) => {
  const onOptionClicked = (key: string) => {
    if (key === "edit") {
      onEdit(key);
    } else if (key === "delete") {
      onDelete(key);
    }
  };

  const subTasks = taskInfo.subTasks.length;
  const progress = taskInfo.subTasks.reduce(
    (acc, task) => (task.isDone ? acc + 1 : acc),
    0
  );

  return (
    <div className="flex flex-col gap-5 border-2 mb-4 border-bgOption rounded-xl p-5 w-[320px]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <Text text={taskInfo.nameTask} variant="titleCard" />
          <Text text={taskInfo.description} variant="descriptionCard" />
        </div>
        <Menu options={menuOptions} onOptionClicked={onOptionClicked} />
      </div>
      <Progress progress={progress} maxLimit={subTasks} />
      <div className="flex flex-row justify-between">
        <Date date={taskInfo.dateCreated} variant="primary" />
        <CommentsViewer comments={taskInfo.comments} icon="comments" />
      </div>
    </div>
  );
};

export default TaskCard;
