import React from "react";
import "./App.css";
/* import { Route, Routes } from "react-router-dom"; */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Subscribe } from "./routes/Subscribe";
import { Start } from "./routes/Start.js";
import { Pay } from "./routes/Pay.js";
import { Done } from "./routes/Done.js";
import { Settings } from "./routes/Settings.js";
import { ActiveSubs } from "./routes/ActiveSubs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Subscribe/:id" element={<Subscribe />} />
      <Route path="/Start" element={<Start />} />
      <Route path="/Pay" element={<Pay />} />
      <Route path="/Done" element={<Done />} />
      <Route path="/ActiveSubs" element={<ActiveSubs />} />
      <Route path="/Settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
