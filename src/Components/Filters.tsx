import React, { useState } from "react";
import Form from "./AddNewTask";
import {useTaskContext} from '../context/index'
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRange } from 'react-date-range';

const FiltersPage: React.FC = () => {
  const [startDate, setStartDate] = useState<string>(" ");
  const [filters, setFilters] = useState({
    assignees:"",
    priority:"",
    startDate:"",
    endDate:""
  });
  const [showAddTaskDialog, setShowAddTaskDialog] = useState<Boolean>(false);
  const { tasks, sortTasksByPriority, sortTasksByDate ,filterTasks } = useTaskContext();

  // const [endDate, setEndDate] = useState<string>("");

  // const handleFilter = () => {
  //   // Filter tasks based on startDate and endDate
   
  // };
  const handleFilterChange = (e:any) => {
    const { name, value } = e.target;
    setFilters((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFilters=(e:any)=>{
    // e.preventDefaults();
    filterTasks(filters)
    console.log("Filters " , filters)
    console.table(tasks);
  }
  
  const handleSortByPriority = (e:any) => {
    const sortBy = e.target.value;
    if (sortBy === "priority") {
      sortTasksByPriority();
    } else if (sortBy === "date") {
      sortTasksByDate();
    }
    console.log("Sort tasks ", tasks)
  };
  // const selectionRange = {
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: 'selection',
  // }

  return (
    <>
    <div className="flex flex-col w-full ">
      <div className="flex w-[100%] justify-between items-center">
        <div className="flex">
          <h1 className="text-2xl font-bold m-2">Filters :</h1>
          <div className="flex">
            <select
              className="m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="assignees"
              name="assignees"
              onChange={handleFilterChange}
            >
              <option >Assignee</option>
              <option value="John Doe">Aman</option>
              <option value="Raj">Raj</option>
              <option value="Abhay">Abhay</option>
            </select>
            <select
              className=" m-2 border border-gray-300  px-2 py-1 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="priority"
              name="priority"
              onChange={handleFilterChange}
            >
              <option value="">Priority</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
            </select>

            <input
              className=" m-2 border border-gray-300  px-2 py-1 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="date"
              id="startDate"
              name="startDate"
              value={filters.startDate}
              onChange={handleFilterChange}
            />
            <input
              className=" m-2 border border-gray-300  px-2 py-1 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="date"
              id="endDate"
              name="endDate"
              value={filters.endDate}
              onChange={handleFilterChange}
            />
            {/* <DateRange ranges={[selectionRange]} onChange={handleFilters}  /> */}
          </div>
        <button
          type="submit"
          className="px-4 py-2 text-white "
          onClick={handleFilters}
        >
          <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/filter--v1.png" alt="filter--v1"/>
        </button>
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
            onChange={handleSortByPriority}
          >
            <option>Sort By</option>
            <option value="priority">Priority</option>
            <option value="date">Date</option>
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
