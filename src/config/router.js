import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherApp from "../components/weatherapp/weatherapp";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WeatherApp />} />
        </Routes>
      </Router>
    </>
  );
}
