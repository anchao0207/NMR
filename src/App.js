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
import About from "./pages/About/about";
import FacultyResearch from "./pages/FacultyResearch/facultyResearch";

import NMRSpectrum from "./pages/NMRSpectrum/nmrSpectrum";
import NMRInstrumentation from "./pages/NMRInstrumentation/nmrInstrumentation";

import StillDeveloping from "./pages/StillDeveloping/stillDeveloping";

import KaitieAdelberger from "./components/FacultyResearch/KaitieAdelberger";
import DianaCermak from "./components/FacultyResearch/DianaCermak/DianaCermak";
import AsymmetricSynthesis from "./components/FacultyResearch/DianaCermak/AsymmetricSynthesis"
import SynthesisPhosphorus from "./components/FacultyResearch/DianaCermak/SynthesisPhosphorus"
import HelenHoyt from "./components/FacultyResearch/HelenHoyt";

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

  // document.addEventListener("fullscreenchange", function(event) {
  //   if (!document.fullscreenElement) {
  //     event.preventDefault();
  //     document.documentElement.requestFullscreen();
  //   }
  // });

  return (
    <ViewportProvider>
      <Router>
        <Routes>
          <Route exact path={"/NMRFundamentals"} element={<NMRFundamentals />} />
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/NMRInstrumentation"} element={<NMRInstrumentation />} />
          <Route exact path={"/NMRSpectrum"} element={<NMRSpectrum />} />

          <Route exact path={"/CourseUsage"} element={<CourseUsage />} />
          <Route exact path={"/CourseUsage/GeneralChemistry"} element={<GeneralChemistry />} />
          <Route exact path={"/CourseUsage/OrganicChemistry"} element={<OrganicChemistry />} />
          <Route exact path={"/CourseUsage/OrganicChemistry/SpectroscopyUnknownLab"} element={<SpectroscopyUnknownLab />} />
          <Route exact path={"/CourseUsage/OrganicChemistry/3-weekLab"} element={<ThreeWeekLab />} />
          <Route exact path={"/CourseUsage/OrganicChemistry/Stereoselective"} element={<Stereoselective />} />
          <Route exact path={"/CourseUsage/BiologicalInstrumentation"} element={<BiologicalInstrumentation />} />
          <Route exact path={"/YeastFermentation"} element={<YeastFermentation />} />
          <Route exact path={"/NucleotideProtonation"} element={<NucleotideProtonation />} />
          <Route exact path={"/RateConstant"} element={<RateConstant />} />
          <Route exact path={"/CourseUsage/AdvancedSynthesis"} element={<AdvancedSynthesis />} />
          <Route exact path={"/LigandSynthesis"} element={<LigandSynthesis />} />
          <Route exact path={"/PrecatalystSynthesis"} element={<PrecatalystSynthesis />} />

          <Route exact path={"/FacultyResearch"} element={<FacultyResearch />} />
          <Route exact path={"/FacultyResearch/KaitieAdelberger"} element={<KaitieAdelberger />} />
          <Route exact path={"/FacultyResearch/DianaCermak"} element={<DianaCermak />} />
          <Route exact path={"/FacultyResearch/DianaCermak/AsymmetricSynthesis"} element={<AsymmetricSynthesis />} />
          <Route exact path={"/FacultyResearch/DianaCermak/SynthesisPhosphorus"} element={<SynthesisPhosphorus />} />
          <Route exact path={"/FacultyResearch/HelenHoyt"} element={<HelenHoyt />} />

          <Route exact path={"/About"} element={<About />} />
          <Route exact path={"/StillDeveloping"} element={<StillDeveloping />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </Router>
    </ViewportProvider>
  );
}
