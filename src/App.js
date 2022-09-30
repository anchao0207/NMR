import "./App.css";
import Home from "./pages/Home/home";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ViewportProvider } from "./viewportContext";

export default function App() {
  return (
    <ViewportProvider>
      <Router>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </Router>
    </ViewportProvider>
  );
}
