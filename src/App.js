import React from "react";
import "./App.css";
/* Removing "Router" crashes the app for some reason, despite it not being used */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Subscribe } from "./routes/Subscribe";
import { Start } from "./routes/Start.js";
import { Pay } from "./routes/Pay.js";
import { Done } from "./routes/Done.js";
import { Settings } from "./routes/Settings.js";
import { ActiveSubs } from "./routes/ActiveSubs";
import { Pickup } from "./routes/Pickup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Subscribe/:id" element={<Subscribe />} />
      <Route path="/Pay" element={<Pay />} />
      <Route path="/Done/:id" element={<Done />} />
      <Route path="/ActiveSubs" element={<ActiveSubs />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/Pickup" element={<Pickup />} />
    </Routes>
  );
}

export default App;
