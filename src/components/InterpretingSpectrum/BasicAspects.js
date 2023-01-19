import React from "react";
import { Link } from "react-router-dom";
import "./interpretingSpectrum.css";
import Symmetry from "./Symmetry";
import ChemicalShift from "./ChemicalShift";
import Integration from "./Integration";
import Spliting from "./Spliting";
import gsap from "gsap";

export default function BasicAspects() {
  const basicRef = React.useRef();
  const aspectsRef = React.useRef();
  const symmetryRef = React.useRef();
  const chemShiftRef = React.useRef();
  const integrationRef = React.useRef();
  const splitingRef = React.useRef();

  const content = {
    heading: "4 Basic\nAspects",
    link1: "SYMMETRY",
    link2: "CHEMICAL SHIFT",
    link3: "INTEGRATION",
    link4: "SPLITTING",
  };

  const onSymmetryClick = (e) => {
    e.preventDefault();
    gsap.to(chemShiftRef.current, { visibility: "hidden", opacity: 0 });
    gsap.to(integrationRef.current, { visibility: "hidden", opacity: 0 });
    gsap.to(splitingRef.current, { visibility: "hidden", opacity: 0 });
    var tl = gsap.timeline();
    tl.to(aspectsRef.current, { opacity: 0, duration: 0.25 })
      .to(aspectsRef.current, { visibility: "hidden" })
      .to(basicRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      })
      .to(symmetryRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      })
      .to(".back4", { visibility: "visible", opacity: 1 })
      .to(".back3", { visibility: "hidden" });
  };

  const onChemShiftClick = (e) => {
    e.preventDefault();
    gsap.to(symmetryRef.current, { visibility: "hidden", opacity: 0 });
    gsap.to(integrationRef.current, { visibility: "hidden", opacity: 0 });
    gsap.to(splitingRef.current, { visibility: "hidden", opacity: 0 });
    var tl = gsap.timeline();
    tl.to(aspectsRef.current, { opacity: 0, duration: 0.25 })
      .to(aspectsRef.current, { visibility: "hidden" })
      .to(basicRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      })
      .to(chemShiftRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      })
      .to(".back4", { visibility: "visible", opacity: 1 })
      .to(".back3", { visibility: "hidden" });
  };

  const onIntegrationClick = (e) => {
    e.preventDefault();
    gsap.to(symmetryRef.current, { visibility: "hidden", opacity: 0 });
    gsap.to(chemShiftRef.current, { visibility: "hidden", opacity: 0 });
    gsap.to(splitingRef.current, { visibility: "hidden", opacity: 0 });
    var tl = gsap.timeline();
    tl.to(aspectsRef.current, { opacity: 0, duration: 0.25 })
      .to(aspectsRef.current, { visibility: "hidden" })
      .to(basicRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      })
      .to(integrationRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      })
      .to(".back4", { visibility: "visible", opacity: 1 })
      .to(".back3", { visibility: "hidden" });
  };

  const onSplitingClick = (e) => {
    e.preventDefault();
    gsap.to(symmetryRef.current, { visibility: "hidden", opacity: 0 });
    gsap.to(chemShiftRef.current, { visibility: "hidden", opacity: 0 });
    gsap.to(integrationRef.current, { visibility: "hidden", opacity: 0 });
    var tl = gsap.timeline();
    tl.to(aspectsRef.current, { opacity: 0, duration: 0.25 })
      .to(aspectsRef.current, { visibility: "hidden" })
      .to(basicRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      })
      .to(splitingRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      })
      .to(".back4", { visibility: "visible", opacity: 1 })
      .to(".back3", { visibility: "hidden" });
  };

  React.useEffect(() => {
    gsap.from(basicRef.current, { opacity: 0, visibility: "hidden" });
    gsap.from(symmetryRef.current, { opacity: 0, visibility: "hidden" });
    gsap.from(chemShiftRef.current, { opacity: 0, visibility: "hidden" });
    gsap.from(splitingRef.current, { opacity: 0, visibility: "hidden" });
  });

  return (
    <>
      <div className="basic" ref={basicRef}>
        <div className="symmetry" ref={symmetryRef}>
          <Symmetry />
        </div>
        <div className="chemical-shift" ref={chemShiftRef}>
          <ChemicalShift />
        </div>
        <div className="integration" ref={integrationRef}>
          <Integration />
        </div>
        <div className="spliting" ref={splitingRef}>
          <Spliting />
        </div>
      </div>
      <div className="aspect" ref={aspectsRef}>
        <div className="spectrum-main-title">{content.heading}</div>
        <div className="spectrum-main-desc">
          <ol>
            <li className="list">
              <Link
                className="spectrum-main-link spectrum-main-link-text"
                onClick={onSymmetryClick}
              >
                {content.link1}
              </Link>
            </li>
            <li className="list">
              <Link
                className="spectrum-main-link spectrum-main-link-text"
                onClick={onChemShiftClick}
              >
                {content.link2}
              </Link>
            </li>
            <li className="list">
              <Link
                className="spectrum-main-link spectrum-main-link-text"
                onClick={onIntegrationClick}
              >
                {content.link3}
              </Link>
            </li>
            <li className="list">
              <Link className="spectrum-main-link spectrum-main-link-text" onClick={onSplitingClick}>
                {content.link4}
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
