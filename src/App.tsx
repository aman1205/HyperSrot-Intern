import React, { useState } from "react";
import TaskList from "./Components/TaskList";
import { Task } from "./Components/Types";
import NavBar from "./Components/Navbar";
import FiltersPage from "./Components/Filters";
const App: React.FC = () => {
  // State to manage tasks
  const [tasks, setTasks] = useState<Task[]>([]);

  // Function to add a new task
  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center  flex-col">
        <h1 className="text-3xl font-bold mb-4">Task Tracker</h1>
        <FiltersPage/>
        {/* <TaskForm addTask={addTask} /> */}
        <TaskList />
      </div>
    </>
  );
};

export default App;
