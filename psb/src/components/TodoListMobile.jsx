import React from "react";
import TodoMobile from "./TodoMobile";
import { initialData } from "../data/todoData";

const TodoListMobile = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-5">
      {initialData.map((item, index) => {
        return (
          <TodoMobile
            key={index}
            desc={item.todoDescription}
            date={item.todoDateCreated}
            completed={item.todoCompleted}
          />
        );
      })}
    </div>
  );
};

export default TodoListMobile;
