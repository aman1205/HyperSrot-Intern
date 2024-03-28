import { Task } from "./Types";
import { useTaskContext } from "../context/index";
import TaskCard from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  deleteTask: (taskId: number) => void;
}

const TaskList = () => {
  const { tasks } = useTaskContext();

  // Organize tasks into separate arrays based on status
  const pendingTasks = tasks.filter((task) => task.status === "Pending");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
  const completedTasks = tasks.filter((task) => task.status === "Completed");
  const deployedTasks = tasks.filter((task) => task.status === "Deployed");
  const deferredTasks = tasks.filter((task) => task.status === "Deferred");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      <div className="bg-[#DDDDDD] rounded-md">
        <div className="bg-[#8B93FF] rounded-t-md">
          <h2 className="text-center font-bold text-xl py-2">Pending</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 p-4">
          {pendingTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
      <div className="bg-[#DDDDDD] rounded-md">
        <div className="bg-[#5755FE] rounded-t-md">
          <h2 className="text-center font-bold text-xl py-2">In Progress</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 p-4">
          {inProgressTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
      <div className="bg-[#DDDDDD] rounded-md">
        <div className="bg-[#FF71CD] rounded-t-md">
          <h2 className="text-center font-bold text-xl py-2">Completed</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 p-4">
          {completedTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
      <div className="bg-[#DDDDDD] rounded-md">
        <div className="bg-[#2C7865] rounded-t-md">
          <h2 className="text-center font-bold text-xl py-2">Deployed</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 p-4">
          {deployedTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
      <div className="bg-[#DDDDDD] rounded-md">
        <div className="bg-[#FFAF45] rounded-t-md">
          <h2 className="text-center font-bold text-xl py-2">Deferred</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 p-4">
          {deferredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
