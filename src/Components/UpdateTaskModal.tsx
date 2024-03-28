import React, { useState } from "react";
import { Task } from "./Types";

interface UpdateTaskModalProps {
  isOpen: boolean;
  task: Task;
  onUpdate: (updatedTask: Task) => void;
  onClose: () => void;
}

const UpdateTaskModal: React.FC<UpdateTaskModalProps> = ({
  isOpen,
  task,
  onUpdate,
  onClose,
}) => {
  const [updatedTask, setUpdatedTask] = useState<Task>(task);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  const handleUpdate = () => {
    onUpdate(updatedTask);
    onClose();
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="font-semibold mb-4">Update Task</h2>
        <label className="block mb-2" htmlFor="title">
          Title:
          <input
            className="border rounded w-full p-2 mt-1"
            type="text"
            name="title"
            id="title"
            value={updatedTask.title}
            onChange={handleChange}
          />
        </label>
        <label className="block mb-2" htmlFor="description">
          Description:
          <textarea
            className="border rounded w-full p-2 mt-1"
            name="description"
            id="description"
            value={updatedTask.description}
            onChange={handleChange}
          ></textarea>
        </label>
        <label className="block mb-2" htmlFor="team">
          Team:
          <input
            className="border rounded w-full p-2 mt-1"
            type="text"
            name="team"
            id="team"
            value={updatedTask.team}
            onChange={handleChange}
            placeholder="Enter team name"
          />
        </label>
        <label className="block mb-2" htmlFor="assignees">
          Assignees:
          <input
            className="border rounded w-full p-2 mt-1"
            type="text"
            name="assignees"
            id="assignees"
            value={updatedTask.assignees}
            onChange={handleChange}
            placeholder="Enter assignees"
          />
        </label>
        <label className="block mb-2" htmlFor="priority">
          Priority:
          <select
            className="border rounded w-full p-2 mt-1"
            id="priority"
            name="priority"
            value={updatedTask.priority}
            onChange={handleChange}
          >
            <option value="P1">P1</option>
            <option value="P2">P2</option>
            <option value="P3">P3</option>
          </select>
        </label>
        <label className="block mb-2" htmlFor="status">
          Status:
          <select
            className="border rounded w-full p-2 mt-1"
            id="status"
            name="status"
            value={updatedTask.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Deployed">Deployed</option>
            <option value="Deferred">Deferred</option>
          </select>
        </label>
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTaskModal;
