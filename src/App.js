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
import NMRInstrumentation from "./pages/NMRInstrumentation/nmrInstrumentation";
import StillDeveloping from "./pages/StillDeveloping/stillDeveloping";
import Faculty1Soil from "./components/FacultyResearch/faculty1Soil";
import Faculty2Phospho from "./components/FacultyResearch/faculty2Phospho";
import Faculty2Asym from "./components/FacultyResearch/faculty2Asym";
import Faculty2Main from "./components/FacultyResearch/faculty2Main";
import Faculty3Green from "./components/FacultyResearch/faculty3Green";

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
          <Route exact path={"/NMRInstrumentation"} element={<NMRInstrumentation />} />
          <Route exact path={"/StillDeveloping"} element={<StillDeveloping />} />
          <Route exact path={"/Faculty1Soil"} element={<Faculty1Soil />} />
          <Route exact path={"/Faculty2Asym"} element={<Faculty2Asym />} />
          <Route exact path={"/Faculty2Phospho"} element={<Faculty2Phospho />} />
          <Route exact path={"/Faculty2Main"} element={<Faculty2Main />} />
          <Route exact path={"/Faculty3Green"} element={<Faculty3Green />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </Router>
    </ViewportProvider>
  );
}
