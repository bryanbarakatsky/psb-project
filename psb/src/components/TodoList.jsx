import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router";
import { initialData } from "../data/todoData";
import axios from "axios";

export const TodoList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    localStorage.removeItem("selectedTodo");

    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/tasks");
        console.log(res.data);
        if (res.status === 200) {
          setData(res.data);
        } else {
          console.error("Failed to fetch tasks:", res.statusText);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
    console.log("data", data);
  }, [data]);

  const handleCheckboxClick = async (index) => {
    const newData = data.map((item, i) =>
      i === index ? { ...item, isCompleted: !item.isCompleted ? 1 : 0 } : item
    );

    setData(newData);
    localStorage.setItem("todos", JSON.stringify(newData));
    try {
      console.log(data[index].isCompleted);
      const res = await axios.put(`http://localhost:5000/mark-done/${index}`, {
        isCompleted: data[index].isCompleted,
      });
      if (res.status == 200) {
        console.log("successful");
      } else {
        console.log("unsuccessful");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleTickDone = async (index) => {
    try {
      console.log(data[index].isCompleted);
      const res = await axios.put(`http://localhost:5000/mark-done/${index}`, {
        isCompleted: data[index].isCompleted,
      });
      if (res.status == 200) {
        console.log("successful");
      } else {
        console.log("unsuccessful");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return isNaN(date) ? "Invalid date" : date.toLocaleString();
  };

  const handleEditClick = (row) => {
    localStorage.setItem("selectedTodo", JSON.stringify(row));
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: 1200,
          boxShadow: 1,
          borderRadius: 2,
          overflowY: "auto",
          maxHeight: 500,
        }}
      >
        <Table sx={{ minWidth: 1200 }} stickyHeader aria-label="todo table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f3f4f6" }}>
              <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Date Created
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Action
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Status
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row, id) => {
              const isDone = row.isCompleted;
              const textClass = isDone ? "line-through text-gray-500" : "";
              const stateColor = isDone ? "!text-green-500" : "!text-gray-500";
              const canEdit = isDone ? "N/A" : "Edit";

              return (
                <TableRow
                  key={row._id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": { backgroundColor: "#f9fafb" },
                  }}
                >
                  <TableCell className={textClass}>
                    {row.description || "(No description)"}
                  </TableCell>

                  <TableCell align="right" className={textClass}>
                    {formatDate(row.dateCreated)}
                  </TableCell>

                  <TableCell
                    align="right"
                    className={`${
                      !isDone
                        ? "!text-red-500 cursor-pointer"
                        : "!text-gray-400"
                    } hover:!text-blue-500`}
                  >
                    {!isDone ? (
                      <Link to="/add-edit" onClick={() => handleEditClick(row)}>
                        {canEdit}
                      </Link>
                    ) : (
                      "N/A"
                    )}
                  </TableCell>

                  <TableCell align="right" className={stateColor}>
                    {isDone ? "Done" : "Not Done"}
                  </TableCell>

                  <TableCell>
                    <Checkbox
                      onClick={() => {
                        handleCheckboxClick(id);
                      }}
                      color={isDone ? "success" : "default"}
                      checked={isDone}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {((data && data.length < 1) || !data) && (
        <h1 className="text-gray-500 flex text-center justify-center">
          No tasks found. Please add a task.
        </h1>
      )}
      <div>
        <Link to="/add-edit">
          <Button variant="contained">Add</Button>
        </Link>
      </div>
    </div>
  );
};

export default TodoList;
