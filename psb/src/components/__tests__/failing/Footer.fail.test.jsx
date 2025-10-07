import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from "../../Footer";

// pureposely failed tests

test("checks footer text - fails since test non existent", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  expect(screen.getByText(/NOTHERE/i)).toBeInTheDocument();
});
