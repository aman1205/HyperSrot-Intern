import React, { useState } from "react";
import Form from "./AddNewTask";
import { useTaskContext } from '../context/index';

const FiltersPage: React.FC = () => {
  const [filters, setFilters] = useState({
    assignees: "",
    priority: "",
    startDate: "",
    endDate: ""
  });
  const [showAddTaskDialog, setShowAddTaskDialog] = useState<boolean>(false);
  const { tasks, sortTasksByPriority, sortTasksByDate, filterTasks } = useTaskContext();

  const handleFilterChange = (e: any) => {
    const { name, value } = e.target;
    setFilters((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFilters = () => {
    filterTasks(filters);
    console.log("Filters ", filters);
    console.table(tasks);
  };

  const handleSortByPriority = (e: any) => {
    const sortBy = e.target.value;
    if (sortBy === "priority") {
      sortTasksByPriority();
    } else if (sortBy === "date") {
      sortTasksByDate();
    }
    console.log("Sort tasks ", tasks);
  };

  return (
    <>
      <div className="bg-white p-4 shadow-lg">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h1 className="font-bold text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl m-2">
              Filters :
            </h1>
            <div className="flex flex-col sm:flex-row">
              <select
                className="m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                id="assignees"
                name="assignees"
                onChange={handleFilterChange}
              >
                <option>Assignee</option>
                <option value="John Doe">Aman</option>
                <option value="Raj">Raj</option>
                <option value="Abhay">Abhay</option>
              </select>
              <select
                className="m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-4"
                id="priority"
                name="priority"
                onChange={handleFilterChange}
              >
                <option value="">Priority</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
                <option value="P3">P3</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row">
              <input
                className="m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
                type="date"
                id="startDate"
                name="startDate"
                value={filters.startDate}
                onChange={handleFilterChange}
              />
              <input
                className="m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
                type="date"
                id="endDate"
                name="endDate"
                value={filters.endDate}
                onChange={handleFilterChange}
              />
            </div>
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-2"
              onClick={handleFilters}
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/50/filter--v1.png"
                alt="filter--v1"
              />
            </button>
          </div>
          <div className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center">
              <h1 className="font-bold text-2xl m-2">Sort :</h1>
              <div>
                <select
                  className="m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
                  id="priority"
                  name="priority"
                  onChange={handleSortByPriority}
                >
                  <option>Sort By</option>
                  <option value="priority">Priority</option>
                  <option value="date">Date</option>
                </select>
              </div>
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-2 sm:ml-4"
                onClick={() => setShowAddTaskDialog(true)}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
      {showAddTaskDialog && (
        <div className="bg-blur">
          <Form setShowAddTaskDialog={setShowAddTaskDialog} />
        </div>
      )}
    </>
  );
};

export default FiltersPage;
