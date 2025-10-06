import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-24 p-5 border-gray shadow-lg">
      <div className="w-full h-full grid grid-cols-10 content-center items-center ">
        <div className="col-span-2 flex flex-row items-center gap-5">
          <a href="https://www.qa.com">
            <img src="../public/qaLogo.png" alt="QA Ltd"></img>
          </a>
          <a className="font-bold text-xl text-[#003E50]">Todo App</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
