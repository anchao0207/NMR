import React from "react";
import NavBar from "../../components/NavBar/navbar";
import "./nmrSpectrum.css";
import InterpretingSpectrum from "../../components/InterpretingSpectrum/InterpretingSpectrum";
import HSpectroscopy from "../../components/InterpretingSpectrum/HSpectroscopy"
import { ReactComponent as Back } from "../Home/backArrow.svg";
import { ReactComponent as Forward } from "../Home/forwardArrow.svg";

export default function NMRSpectrum() {
  const titleRef = React.useRef(null);

  return (
    <div className="spectrum">
      <NavBar></NavBar>
      <div className="spectrumTitle" ref={titleRef}>
        <span>Interpreting NMR Spectrum</span>
      </div>
      <div className="spectrum-main">
        {/* <InterpretingSpectrum></InterpretingSpectrum> */}
        <HSpectroscopy/>
      </div>
      <Back className="spectrum-back"></Back>
      <Forward className="spectrum-forward"></Forward>
    </div>
  );
}
