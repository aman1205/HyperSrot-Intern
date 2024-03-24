import React from "react";
import { Task } from "./Types";

interface TaskListProps {
  tasks: Task[];
  deleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="mb-2">
            <div className="flex justify-between items-center">
              <div>
                <p>{task.title}</p>
                <p className="text-gray-500">{task.description}</p>
              </div>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
