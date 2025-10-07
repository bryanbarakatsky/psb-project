import React from "react";

const TodoMobile = ({ desc, date, completed }) => {
  const RenderButtons = ({ completed }) => {
    const defaultButtonStyle = "rounded-lg w-1/2";
    const completedButtonStyle = `${defaultButtonStyle} ${
      completed ? "bg-[#ECFDF5]" : "bg-[#E8E8E8]"
    }`;
    const editUndone = `${defaultButtonStyle} ${
      completed ? "bg-[#E8E8E8]" : "bg-[#9AB9F3]"
    }`;
    if (completed) {
      return (
        <>
          <button className={completedButtonStyle}>Completed</button>
          <button className={editUndone}>Undone</button>
        </>
      );
    } else {
      return (
        <>
          <button className={completedButtonStyle}>Mark Complete</button>
          <button className={editUndone}>Edit</button>
        </>
      );
    }
  };

  return (
    <div className="flex flex-col size-70 border justify-center text-left rounded-lg p-5 gap-5">
      <h1>{desc}</h1>
      <p>created @ {date}</p>
      <div className="flex flex-row gap-2 h-10 w-full text-sm">
        <RenderButtons completed={completed} />
      </div>
    </div>
  );
};

export default TodoMobile;
