import React, { useState } from "react";
import Form from "./Form";

const FiltersPage: React.FC = () => {
  const [startDate, setStartDate] = useState<string>(" ");
  const [showAddTaskDialog, setShowAddTaskDialog] = useState<Boolean>(false);

  // const [endDate, setEndDate] = useState<string>("");

  const handleFilter = () => {
    // Filter tasks based on startDate and endDate
    console.log("Filtering tasks from", startDate);
  };
  return (
    <>
    <div className="flex flex-col w-full ">
      <div className="flex w-[100%] justify-between items-center">
        <div className="flex">
          <h1 className="text-2xl font-bold m-2">Filters :</h1>
          <div className="flex">
            <select
              className="m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="Assignee"
              name="Assignee"
            >
              <option value="">Assignee</option>
              <option value="Aman">Aman</option>
              <option value="Raj">Raj</option>
              <option value="Abhay">Abhay</option>
            </select>
            <select
              className=" m-2 border border-gray-300  px-2 py-1 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="priority"
              name="priority"
            >
              <option value="">Priority</option>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>

            <input
              className=" m-2 border border-gray-300  px-2 py-1 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="date"
              id="startDate"
              name="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-10"
          onClick={()=>setShowAddTaskDialog(true)}
        >
          Add Task
        </button>
      </div>
      <div className="flex ">
        <h1 className="text-2xl font-bold m-2">Sort :</h1>
        <div>
          <select
            className=" m-2 border border-gray-300 px-2 py-1 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="priority"
            name="priority"
          >
            <option value="">Priority</option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
        </div>
      </div>
    </div>
    {
      showAddTaskDialog  && (
        <div className="bg-blur">
          <Form setShowAddTaskDialog={setShowAddTaskDialog} />
        </div>
      )
    }
    </>
  );
};

export default FiltersPage;
