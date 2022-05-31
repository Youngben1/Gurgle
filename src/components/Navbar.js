import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-1 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnR4SbyOe5q4JGzaeFJB29UeFL26crvJvEfg&usqp=CAU"
            alt="logo"
            className=" h-10 w-13 rounded cursor-pointer"
          />
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full text-xl p-2 cursor-pointer hover:shadow-lg"
        >
          {darkTheme ? "Light 💡" : "Dark 🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
