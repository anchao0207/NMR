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
import NMRFundamentals from "./pages/NMRFundamentals/nmrFundamentals";
import CourseUsage from "./pages/CourseUsage/courseUsage";
import FacultyResearch from "./pages/FacultyResearch/facultyResearch";
import NMRSpectrum from "./pages/NMRSpectrum/nmrSpectrum";
import StillDeveloping from "./pages/StillDeveloping/stillDeveloping";

export default function App() {
  return (
    <ViewportProvider>
      <Router>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/NMRFundamentals"} element={<NMRFundamentals />} />
          <Route exact path={"/CourseUsage"} element={<CourseUsage />} />
          <Route exact path={"/FacultyResearch"} element={<FacultyResearch />} />
          <Route exact path={"/NMRSpectrum"} element={<NMRSpectrum />} />
          <Route exact path={"/StillDeveloping"} element={<StillDeveloping />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </Router>
    </ViewportProvider>
  );
}
