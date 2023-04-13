import React from "react";
import "./interpretingSpectrum.css";

export default function HSpectroscopy() {
  const content = {
    heading: "H NMR\nSpectroscopy",
    desc1: "Different Experiments\nProduce Different\nSpectra",
    desc2:
      "There are four main aspects of NMR spectra that give us information about the chemical structure of our sample.\n\nA variety of experiments can be performed to give us information about nuclei in a molecule.\nThe aspects of the spectra are dependent upon the type of NMR experiment you are running.\n\nMost experiments will provide at least two of these aspects, but one will always produce all four: ",
    desc3:
      "H NMR Spectroscopy.\n\nLet’s focus on ",
      desc4: "H NMR Spectroscopy to learn about all four aspects.",
  };
  return (
    <>
      <div className="spectrum-main-title">
        <sup className="sup">1</sup>
        {content.heading}
      </div>

      <div className="spectrum-main-desc">
        <div className="spectrum-main-desc1">{content.desc1}</div>
        <div className="spectrum-main-desc2">
          {content.desc2}
          <sup>1</sup>
          {content.desc3}
          <sup>1</sup>
          {content.desc4}
        </div>
      </div>
    </>
  );
}
