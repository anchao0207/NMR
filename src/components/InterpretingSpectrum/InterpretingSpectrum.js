import React from "react";
import "./interpretingSpectrum.css";

export default function InterpretingSpectrum() {
  const content = {
    heading: "Interpreting\nNMR Spectrum",
    desc0: '"Seeing"',
    desc1: "Chemical\nStructures",
    desc2:
      "An NMR spectrum doesn’t actually allow us to see a chemical structure, but a trained scientist can elucidate a chemical structure from NMR spectral data.",
  };
  return (
    <>
      <div className="spectrum-main-title">{content.heading}</div>

      <div className="spectrum-main-desc">
        <div className="spectrum-main-desc0">{content.desc0}</div>
        <div className="spectrum-main-desc1">{content.desc1}</div>
        <div className="spectrum-main-desc2">{content.desc2}</div>
      </div>
    </>
  );
}
