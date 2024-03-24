import React, { useState } from "react";

const FiltersPage: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  // const [endDate, setEndDate] = useState<string>("");

  const handleFilter = () => {
    // Filter tasks based on startDate and endDate
    console.log("Filtering tasks from", startDate,);
  };
  return (
    <div className="flex w-full justify-center">
      <h1 className="text-2xl font-bold m-2">Filters :</h1>
      <div className="">
        <select
          className="m-2 border border-gray-300 rounded"
          id="Assignee"
          name="Assignee"
        >
          <option value="">Assignee</option>
          <option value="Aman">Aman</option>
          <option value="Raj">Raj</option>
          <option value="Abhay">Abhay</option>
        </select>
        <select
          className=" m-2 border border-gray-300 rounded px-2 py-1"
          id="priority"
          name="priority"
        >
          <option value="">Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>

        <input
          className=" m-2 border border-gray-300 rounded px-2 py-1"
          type="date"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FiltersPage;
