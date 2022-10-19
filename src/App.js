import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { Subscribe } from "./routes/Subscribe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Subscribe" element={<Subscribe />} />
      <Route path="/settings" element={<Home />} />
    </Routes>
  );
}

export default App;
