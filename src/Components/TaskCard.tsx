import React, { useState } from "react";
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
    updateTask(task.id, updatedTask);
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
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="font-semibold text-xl mb-2">{task.title}</h3>
        <p className="text-gray-600 mb-4">{task.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">Priority:</span>
            <span className="font-semibold">{task.priority}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">Assignee:</span>
            <span className="font-semibold">{task.assignees}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">Date:</span>
            <span className="font-semibold">{task.startDate}</span>
          </div>
          <div className="flex">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
              onClick={handleOpenUpdateModal}
            >
              Update
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleOpenModal}
            >
              Delete
            </button>
          </div>
        </div>
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
