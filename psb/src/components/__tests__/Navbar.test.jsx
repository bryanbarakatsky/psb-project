import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Layout from "../Layout";
test("renders layout", () => {
  render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
  expect(screen.getByText(/Todo App/i)).toBeInTheDocument();
  expect(screen.getByText(/QA Ltd 2019/i)).toBeInTheDocument();
});
