import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { Subscribe } from "./routes/Subscribe";
import { Start } from "./routes/Start.js";
import { Pay } from "./routes/Pay.js";
import { Done } from "./routes/Done.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Subscribe" element={<Subscribe />} />
      <Route path="/Start" element={<Start />} />
      <Route path="/Pay" element={<Pay />} />
      <Route path="/Done" element={<Done />} />
      <Route path="/settings" element={<Home />} />
    </Routes>
  );
}

export default App;
