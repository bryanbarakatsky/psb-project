import { useState } from "react";

import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
