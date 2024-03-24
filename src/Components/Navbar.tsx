import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="w-screen bg-white p-4 shadow-2xl">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl ">Task Board</h1>
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
          alt="user-male-circle"
        />
      </div>
    </nav>
  );
};

export default NavBar;
