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
import GeneralChemistry from "./pages/CourseUsage/generalChem";
import OrganicChemistry from "./pages/CourseUsage/Organic/organicChem";
import SpectroscopyUnknownLab from "./pages/CourseUsage/Organic/spectroscopyUnknownLab";
import ThreeWeekLab from "./pages/CourseUsage/Organic/threeWeekLab";
import Stereoselective from "./pages/CourseUsage/Organic/stereoselective";
import BiologicalInstrumentation from "./pages/CourseUsage/Biological/BiologicalInstrumentation";
import YeastFermentation from "./pages/CourseUsage/Biological/YeastFermentation";
import NucleotideProtonation from "./pages/CourseUsage/Biological/NucleotideProtonation";
import RateConstant from "./pages/CourseUsage/Biological/RateConstant";
import AdvancedSynthesis from "./pages/CourseUsage/Advanced/AdvancedSynthesis";
import LigandSynthesis from "./pages/CourseUsage/Advanced/LigandSynthesis";
import PrecatalystSynthesis from "./pages/CourseUsage/Advanced/PrecatalystSynthesis";

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
          <Route exact path={"/GeneralChemistry"} element={<GeneralChemistry />} />
          <Route exact path={"/OrganicChemistry"} element={<OrganicChemistry />} />
          <Route exact path={"/SpectroscopyUnknownLab"} element={<SpectroscopyUnknownLab />} />
          <Route exact path={"/3-weekLab"} element={<ThreeWeekLab />} />
          <Route exact path={"/Stereoselective"} element={<Stereoselective />} />
          <Route exact path={"/BiologicalInstrumentation"} element={<BiologicalInstrumentation />} />
          <Route exact path={"/YeastFermentation"} element={<YeastFermentation />} />
          <Route exact path={"/NucleotideProtonation"} element={<NucleotideProtonation />} />
          <Route exact path={"/RateConstant"} element={<RateConstant />} />
          <Route exact path={"/AdvancedSynthesis"} element={<AdvancedSynthesis />} />
          <Route exact path={"/LigandSynthesis"} element={<LigandSynthesis />} />
          <Route exact path={"/PrecatalystSynthesis"} element={<PrecatalystSynthesis />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </Router>
    </ViewportProvider>
  );
}
