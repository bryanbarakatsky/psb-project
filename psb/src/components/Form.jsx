import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Form = () => {
  const navigate = useNavigate();

  const storedTodo = JSON.parse(localStorage.getItem("selectedTodo")) || null;
  const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  const datetime = new Intl.DateTimeFormat("en-US", options).format(Date.now());

  const [description, setDescription] = useState(storedTodo?.todoDescription || "");
  const [completed, setCompleted] = useState(storedTodo?.todoCompleted || false);
  const [dateCreated] = useState(storedTodo?.todoDateCreated || datetime.replace(",", "@"));

  const handleChangeInput = (val) => {
    setDescription(val);
  };

  const handleCompleted = () => {
    setCompleted(!completed);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTodo = {
      _id: storedTodo?._id || existingTodos.length + 1,
      todoDescription: description,
      todoDateCreated: dateCreated,
      todoCompleted: completed,
    };

    let updatedTodos;

    if (storedTodo) {
      updatedTodos = existingTodos.map((item) =>
        item._id === storedTodo._id ? updatedTodo : item
      );
    } else {
      updatedTodos = [...existingTodos, updatedTodo];
    }

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    localStorage.removeItem("selectedTodo");

    setDescription("");
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 flex flex-col gap-4 max-w-lg mx-auto border rounded-2xl shadow-md bg-white"
    >
      <h3 className="text-3xl font-semibold text-center mb-4">Add / Edit Todo</h3>

      <label className="flex flex-col">
        <span className="font-medium mb-1">Description:</span>
        <input
          className="border border-gray-300 rounded-lg p-2"
          type="text"
          value={description}
          onChange={(e) => handleChangeInput(e.target.value)}
          placeholder="Enter todo description"
          required
          name="todoDescription"
        />
      </label>

      <label className="flex flex-col text-gray-600">
        Created on: <span className="font-mono">{dateCreated}</span>
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCompleted}
          className="w-4 h-4"
          name="todoCompleted"
        />
        <span>Completed</span>
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white font-medium rounded-lg p-2 mt-2 hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
