import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Form from "../../Form";

test("renders form", () => {
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
  expect(screen.getByText(/Description/i)).toBeInTheDocument();
  expect(screen.getByText(/Completed/i)).toBeInTheDocument();
  expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(screen.getByRole("checkbox")).toBeInTheDocument();
});

test("form items have correct attributes", () => {
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );

  const descriptionInput = screen.getByPlaceholderText(
    "Enter todo description"
  );
  expect(descriptionInput).toHaveAttribute("type", "text");
  expect(descriptionInput).toHaveAttribute("name", "todoDescription");
  expect(descriptionInput).toBeRequired();

  const completedCheckbox = screen.getByRole("checkbox");
  expect(completedCheckbox).toHaveAttribute("type", "checkbox");
  expect(completedCheckbox).toHaveAttribute("name", "todoCompleted");

  const submitButton = screen.getByRole("button");
  expect(submitButton).toHaveAttribute("type", "submit");
});
