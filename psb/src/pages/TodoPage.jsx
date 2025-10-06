import React from "react";
import Layout from "../components/Layout";
import { TodoList } from "../components/TodoList";
import TodoListMobile from "../components/TodoListMobile";

export const TodoPage = () => {
  return (
    <>
      <div className="flex-col text-center">
        <h1 className="font-bold text-4xl mb-10">Todo list</h1>
        <div className="hidden xl:flex">
          <TodoList />
        </div>
        <div className="w-full h-full xl:hidden">
          <TodoListMobile />
        </div>
      </div>
    </>
  );
};

export default TodoPage;
