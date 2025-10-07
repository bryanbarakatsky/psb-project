import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import NavBar from "../NavBar";

test("renders navbar", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  expect(screen.getByText(/Todo App/i)).toBeInTheDocument();
});
