import React from "react";

const TodoMobile = () => {
  return (
    <div className="flex flex-col size-70 border justify-center text-left rounded-lg p-5 gap-5">
      <h1>Sample Todo 1</h1>
      <p>Created @ 20/09/15 12:23:50</p>
      <p>Description blah blah</p>
      <div className="flex flex-row">
        <button className="w-1/2 bg-[#ECFDF5]">Mark Complete</button>
        <button className="w-1/2">Edit</button>
      </div>
    </div>
  );
};

export default TodoMobile;
