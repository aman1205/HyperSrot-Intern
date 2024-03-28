import React from "react";
import TaskList from "./Components/TaskList";
import NavBar from "./Components/Navbar";
import FiltersPage from "./Components/Filters";
const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-3xl font-bold mt-4 text-center">Task Tracker</h1>
      <FiltersPage />
      <TaskList />
    </>
  );
};

export default App;
