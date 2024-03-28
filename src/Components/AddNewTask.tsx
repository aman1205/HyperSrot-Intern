import React, { useState } from "react";
import { useTaskContext } from "../context/index";

// interface FormProps {
//   setShowAddTaskDialog: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Form = ({ setShowAddTaskDialog }) => {
  const { addTask } = useTaskContext();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    team: "",
    assignees: "",
    priority: "P1",
  });

  const handleCloseDialog = () => {
    setShowAddTaskDialog(false);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveTask = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Note: Months are zero-indexed, so we add 1
    const year = currentDate.getFullYear() % 100;
    // Format day, month, and year with leading zeros if necessary
    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;
    const formattedYear = year < 10 ? "0" + year : year;

    const endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() + 10);

    // Save the task and close the dialog
    const newTask = {
      id: Math.random() * 10,
      ...formData,
      status: "Pending",
      startDate: `${formattedDay}-${formattedMonth}-${formattedYear}`,
      endDate: `${endDate.getDate()}-${endDate.getMonth() + 1}-${
        endDate.getFullYear() % 100
      }`,
    };
    console.table(newTask)
    addTask(newTask);
    handleCloseDialog();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white p-16 rounded shadow">
        <button
          className="text-black font-bold fixed top-24 right-[49rem] mt-2 text-2xl border-2 w-8 border-black rounded-full

          "
          onClick={handleCloseDialog}
        >
          X
        </button>
        <h2 className="text-lg font-bold mb-4 text-center">Add Task</h2>
        <form className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 ">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter task description"
              required
            ></textarea>
          </div>
          {/* <div className="mb-4">
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="team"
            >
              Team
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="team"
              type="text"
              name="team"
              value={formData.team}
              onChange={handleInputChange}
              placeholder="Enter team name"
              required
            /> */
          // </div> */}
        }
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="assignees"
            >
              Assignees
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="assignees"
              type="text"
              name="assignees"
              value={formData.assignees}
              onChange={handleInputChange}
              placeholder="Enter assignees"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="team"
            >
              Team
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              id="team"
              name="team"
              value={formData.team}
              onChange={handleInputChange}
              required
            >
              <option>Select Team </option>
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
              <option value="UI">UI UX</option>
            </select>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="priority"
            >
              Priority
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
            >
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSaveTask}
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
