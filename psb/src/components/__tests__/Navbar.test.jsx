import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import NavBar from "../NavBar";

// successful tests

test("renders navbar", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  expect(screen.getByText(/Todo App/i)).toBeInTheDocument();
});

test("logo navigates to home when clicked", async () => {
  const user = userEvent.setup();

  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const title = screen.getByText(/Todo App/i);
  await user.click(title);

  expect(window.location.pathname).toBe("/");
});

// pureposely failed tests

test("renders navbar text - fails since text non existent", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  expect(screen.getByText(/NOTHERE/i)).toBeInTheDocument();
});

test("logo navigates to home when clicked - fails because path in tobe is incorrect", async () => {
  const user = userEvent.setup();

  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const title = screen.getByText(/Todo App/i);
  await user.click(title);

  expect(window.location.pathname).toBe("/nope");
});
