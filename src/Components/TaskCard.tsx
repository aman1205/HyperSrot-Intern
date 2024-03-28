import React ,{useState} from "react";
import { useTaskContext, Task } from "../context/index";
import ConfirmationModal from "./ConfirmationModal";
import UpdateTaskModal from "./UpdateTaskModal";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { updateTask, deleteTask } = useTaskContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);


  const handleOpenUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    updateTask( task.id,updatedTask);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
    setIsModalOpen(false);
  };

  return (
    <div className= " bg-white shadow-md rounded p-4 mb-4">
      <h3 className="font-semibold">{task.title}</h3>
      <p>Description: {task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Assignee: {task.status}</p>
      <p>{task.assignees}</p>
      <p>Date: {task.startDate}</p>
      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleOpenUpdateModal}
        >
          Update
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleOpenModal}

        >
          Delete
        </button>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onCancel={handleCloseModal}
        onConfirm={handleDeleteTask}
      />
       <UpdateTaskModal
        isOpen={isUpdateModalOpen}
        task={task}
        onUpdate={handleUpdateTask}
        onClose={handleCloseUpdateModal}
      />
    </div>
  );
};

export default TaskCard;
