import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import Layout from "../../Layout";
import NavBar from "../../NavBar";

// mock usenavgiate
const mockNav = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNav,
}));

test("renders layout", () => {
  render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
  expect(screen.getByText(/Todo App/i)).toBeInTheDocument();
  expect(screen.getByText(/QA Ltd 2019/i)).toBeInTheDocument();
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

  expect(mockNav).toHaveBeenCalledWith("/");
});
