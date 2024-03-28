import React, { useState } from "react";
import { useTaskContext } from "../context/index";

const Form = ({ setShowAddTaskDialog }) => {
  const { addTask } = useTaskContext();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    team: "",
    assignees: "",
    priority: "P1",
  });

  const [formErrors, setFormErrors] = useState({
    title: false,
    description: false,
    team: false,
    assignees: false,
  });

  const handleCloseDialog = () => {
    setShowAddTaskDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",
    }));
  };

  const handleSaveTask = () => {
    // Check if any fields are empty
    const hasEmptyFields = Object.values(formErrors).some((error) => error);

    if (hasEmptyFields) {
      alert("Please fill out all fields.");
      return;
    }

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear() % 100;

    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;
    const formattedYear = year < 10 ? "0" + year : year;

    const endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() + 10);

    const newTask = {
      id: Math.random() * 10,
      ...formData,
      status: "Pending",
      startDate: `${formattedDay}-${formattedMonth}-${formattedYear}`,
      endDate: `${endDate.getDate()}-${endDate.getMonth() + 1}-${
        endDate.getFullYear() % 100
      }`,
    };

    addTask(newTask);
    handleCloseDialog();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <button
          className="text-black font-bold absolute top-4 right-4 text-lg focus:outline-none"
          onClick={handleCloseDialog}
        >
          Close
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Add Task</h2>
        <form onSubmit={handleSaveTask}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className={`input-field ${formErrors.title && "border-red-500"}`}
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter task title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className={`input-field ${formErrors.description && "border-red-500"}`}
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter task description"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="assignees">
              Assignees
            </label>
            <input
              className={`input-field ${formErrors.assignees && "border-red-500"}`}
              id="assignees"
              type="text"
              name="assignees"
              value={formData.assignees}
              onChange={handleInputChange}
              placeholder="Enter assignees"
              required
            />
            
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="team">
              Team
            </label>
            <select
              className={`input-field ${formErrors.team && "border-red-500"}`}
              id="team"
              name="team"
              value={formData.team}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Team</option>
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
              <option value="UI">UI UX</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" htmlFor="priority">
              Priority
            </label>
            <select
              className="input-field"
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
              required
            >
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
