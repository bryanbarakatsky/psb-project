import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="w-full h-24 p-5 border-gray shadow-lg">
      <div className="w-full h-full grid grid-cols-3 content-center items-center ">
        <div className="col-span-2 flex flex-row items-center gap-5">
          <a href="https://www.qa.com">
            <img src="../public/qaLogo.png" alt="QA Ltd"></img>
          </a>
          <Link to="/">
            <p className="font-bold text-xl text-[#003E50]">Todo App</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
