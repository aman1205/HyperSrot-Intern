import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Task Board
        </h1>
        <img
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
          src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
          alt="user-male-circle"
        />
      </div>
    </nav>
  );
};

export default NavBar;
