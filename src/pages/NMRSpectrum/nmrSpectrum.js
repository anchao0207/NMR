import React from "react";
import NavBar from "../../components/NavBar/navbar";
import { gsap } from "gsap/all";
import "./nmrSpectrum.css";
import InterpretingSpectrum from "../../components/InterpretingSpectrum/InterpretingSpectrum";
import HSpectroscopy from "../../components/InterpretingSpectrum/HSpectroscopy";
import BasicAspects from "../../components/InterpretingSpectrum/BasicAspects";
import { ReactComponent as Back } from "../Home/backArrow.svg";
import { ReactComponent as Forward } from "../Home/forwardArrow.svg";

export default function NMRSpectrum() {
  const titleRef = React.useRef(null);
  const spectrumRef = React.useRef(null);
  const spectroscopyRef = React.useRef(null);
  const aspectsRef = React.useRef(null);
  const forwardRef1 = React.useRef(null);
  const forwardRef2 = React.useRef(null);
  const backwardRef2 = React.useRef(null);
  const backwardRef3 = React.useRef(null);

  const forwardClick1 = () => {
    var tl = gsap.timeline();
    tl.to(spectrumRef.current, { opacity: 0, duration: 0.5 })
      .to(spectrumRef.current, { visibility: "hidden" })
      .to(
        spectroscopyRef.current,
        {
          visibility: "visible",
          opacity: 1,
          duration: 0.5,
        },
        "show"
      )
      .to(
        backwardRef2.current,
        { visibility: "visible", opacity: 1, duration: 0.5 },
        "show"
      )
      .to(forwardRef1.current, { visibility: "hidden" }, "change")
      .to(
        forwardRef2.current,
        { visibility: "visible", opacity: 1, duration: 0 },
        "change"
      );
  };
  const backwardClick1 = () => {
    var tl = gsap.timeline();
    tl.to(spectroscopyRef.current, { opacity: 0, duration: 0.5 }, "hide")
      .to(backwardRef2.current, { opacity: 0, duration: 0.5 }, "hide")
      .to(spectroscopyRef.current, { visibility: "hidden" })
      .to(spectrumRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.5,
      })
      .to(forwardRef1.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.5,
      })
      .to(forwardRef2.current, { visibility: "hidden" })
      .to(backwardRef2.current, { visibility: "hidden" }, "hide");
  };
  const forwardClick2 = () => {
    var tl = gsap.timeline();
    tl.to(spectroscopyRef.current, { opacity: 0, duration: 0.5 }, "hide")
      .to(forwardRef2.current, { opacity: 0, duration: 0.5 }, "hide")
      .to(spectroscopyRef.current, { visibility: "hidden" })
      .to(aspectsRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.5,
      })

      .to(forwardRef2.current, { visibility: "hidden" }, "hide")
      .to(backwardRef2.current, { visibility: "hidden" }, "change")
      .to(
        backwardRef3.current,
        { visibility: "visible", opacity: 1, duration: 0 },
        "change"
      );
  };
  const backwardClick2 = () => {
    var tl = gsap.timeline();
    tl.to(aspectsRef.current, { opacity: 0, duration: 0.5 })
      .to(aspectsRef.current, { visibility: "hidden" })
      .to(
        spectroscopyRef.current,
        {
          visibility: "visible",
          opacity: 1,
          duration: 0.5,
        },
        "show"
      )
      .to(
        forwardRef2.current,
        {
          visibility: "visible",
          opacity: 1,
          duration: 0.5,
        },
        "show"
      )
      .to(backwardRef3.current, { visibility: "hidden" }, "change")
      .to(backwardRef2.current, { visibility: "visible" }, "change");
  };

  return (
    <div className="spectrum">
      <NavBar></NavBar>
      <div className="spectrumTitle" ref={titleRef}>
        <span>Interpreting NMR Spectrum</span>
      </div>
      <div className="spectrum-main">
        <div ref={spectrumRef}>
          <InterpretingSpectrum />
        </div>
        <div ref={spectroscopyRef} className="invi">
          <HSpectroscopy />
        </div>
        <div ref={aspectsRef} className="invi">
          <BasicAspects />
        </div>
        <Forward
          ref={forwardRef1}
          className="spectrum-forward"
          onClick={forwardClick1}
        ></Forward>
        <Forward
          ref={forwardRef2}
          className="spectrum-forward invi"
          onClick={forwardClick2}
        ></Forward>
        <Back
          ref={backwardRef2}
          className="spectrum-back invi"
          onClick={backwardClick1}
        ></Back>
        <Back
          ref={backwardRef3}
          className="spectrum-back invi"
          onClick={backwardClick2}
        ></Back>
      </div>
    </div>
  );
}
