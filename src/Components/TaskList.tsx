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
    <div className="grid grid-cols-5 gap-4">
      <div className="w-80 h-54  bg-[#DDDDDD] rounded-md">
        <div className="bg-[#8B93FF] rounded-sm">
          <h2 className="text-center font-bold text-xl ">Pending</h2>
        </div>
        {pendingTasks.map((task) => (
          <div key={task.id} className="card p-2">
            <TaskCard task={task} />
          </div>
        ))}
      </div>
      <div className="w-80 h-54  bg-[#DDDDDD] rounded-md">
        <div className="bg-[#5755FE] rounded-sm">
          <h2 className="text-center font-bold text-xl ">In Progress</h2>
        </div>
        {inProgressTasks.map((task) => (
          <div key={task.id} className="card p-2">
            <TaskCard task={task} />
          </div>
        ))}
      </div>
      <div className="w-80 h-54  bg-[#DDDDDD] rounded-md">
        <div className="bg-[#FF71CD] rounded-sm">
          <h2 className="text-center font-bold text-xl ">Completed</h2>
        </div>
        {completedTasks.map((task) => (
          <div key={task.id} className="card p-2">
            <TaskCard task={task} />
          </div>
        ))}
      </div>
      <div className="w-80 h-54  bg-[#DDDDDD] rounded-md">
        <div className="bg-[#2C7865] rounded-sm">
          <h2 className="text-center font-bold text-xl ">Deployed</h2>
        </div>
        {deployedTasks.map((task) => (
          <div key={task.id} className="card p-2">
            <TaskCard task={task} />
          </div>
        ))}
      </div>
      <div className="w-80 h-54  bg-[#DDDDDD] rounded-md">
        <div className="bg-[#FFAF45] rounded-sm">
          <h2 className="text-center font-bold text-xl ">Deferred</h2>
        </div>
        {deferredTasks.map((task) => (
          <div key={task.id} className="card p-2">
            <TaskCard task={task} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
