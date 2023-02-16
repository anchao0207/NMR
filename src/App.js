import "./App.css";
import Home from "./pages/Home/home";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { ViewportProvider } from "./viewportContext";
import NMRFundamentals from "./pages/NMRFundamentals/nmrFundamentals";
import NMRSpectrum from "./pages/NMRSpectrum/nmrSpectrum";

import CourseUsage from "./pages/CourseUsage/courseUsage";
import GeneralChemistry from "./pages/GeneralChemistry/generalChemistry";
import OrganicChemistry from "./pages/GeneralChemistry/organicChemistry";

import FacultyResearch from "./pages/FacultyResearch/facultyResearch";
import Faculty1Soil from "./components/FacultyResearch/faculty1Soil";
import Faculty2Phospho from "./components/FacultyResearch/faculty2Phospho";
import Faculty2Asym from "./components/FacultyResearch/faculty2Asym";
import Faculty2Main from "./components/FacultyResearch/faculty2Main";
import Faculty3Green from "./components/FacultyResearch/faculty3Green";
import StillDeveloping from "./pages/StillDeveloping/stillDeveloping";

export default function App() {
  return (
    <ViewportProvider>
      <Router>
        <Routes>
          {/* NMR Fundamental pages */}
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/NMRSpectrum"} element={<NMRSpectrum />} />
          {/* NavBar pages */}
          <Route exact path={"/NMRFundamentals"} element={<NMRFundamentals />} />
          <Route exact path={"/CourseUsage"} element={<CourseUsage />} />
          <Route exact path={"/FacultyResearch"} element={<FacultyResearch />} />
          {/* Course Usage Pages */}
          <Route exact path={"/GeneralChemistry"} element={<GeneralChemistry />} />
          <Route exact path={"/OrganicChemistry"} element={<OrganicChemistry />} />
          {/* Faculty Research pages */}
          <Route exact path={"/Faculty1Soil"} element={<Faculty1Soil />} />
          <Route exact path={"/Faculty2Asym"} element={<Faculty2Asym />} />
          <Route exact path={"/Faculty2Phospho"} element={<Faculty2Phospho />} />
          <Route exact path={"/Faculty2Main"} element={<Faculty2Main />} />
          <Route exact path={"/Faculty3Green"} element={<Faculty3Green />} />
          {/* Error pages */}
          <Route exact path={"/StillDeveloping"} element={<StillDeveloping />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </Router>
    </ViewportProvider>
  );
}
