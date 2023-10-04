import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Symmetry from "./Symmetry";
import ChemicalShift from "./ChemicalShift";
import Integration from "./Integration";
import Splitting from "./Splitting";
import "./interpretingSpectrum.css";

export default function BasicAspects() {
  const basicRef = useRef(null);
  const aspectsRef = useRef(null);
  const symmetryRef = useRef(null);
  const chemShiftRef = useRef(null);
  const integrationRef = useRef(null);
  const splittingRef = useRef(null);

  const content = {
    heading: "4 Basic\nAspects",
    link1: "SYMMETRY",
    link2: "CHEMICAL SHIFT",
    link3: "INTEGRATION",
    link4: "SPLITTING",
  };

  const onLinkClick = (ref) => {
    gsap.to(symmetryRef.current, { visibility: "hidden", opacity: 0 });
    gsap.to(chemShiftRef.current, { visibility: "hidden", opacity: 0 });
    gsap.to(integrationRef.current, { visibility: "hidden", opacity: 0 });
    gsap.to(splittingRef.current, { visibility: "hidden", opacity: 0 });

    const tl = gsap.timeline();
    tl.to(aspectsRef.current, { opacity: 0, duration: 0.25 })
      .to(aspectsRef.current, { visibility: "hidden" })
      .to(basicRef.current, { visibility: "visible", opacity: 1, duration: 0.25 })
      .to(ref.current, { visibility: "visible", opacity: 1, duration: 0.25 })
      .to(".back4", { visibility: "visible", opacity: 1 })
      .to(".back3", { visibility: "hidden" });
  };

  useEffect(() => {
    gsap.from(basicRef.current, { opacity: 0, visibility: "hidden" });
    gsap.from(symmetryRef.current, { opacity: 0, visibility: "hidden" });
    gsap.from(chemShiftRef.current, { opacity: 0, visibility: "hidden" });
    gsap.from(splittingRef.current, { opacity: 0, visibility: "hidden" });
  }, []);

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
        <div className="splitting" ref={splittingRef}>
          <Splitting />
        </div>
      </div>
      <div className="aspect" ref={aspectsRef}>
        <div className="spectrum-main-title">{content.heading}</div>
        <div className="spectrum-main-desc">
          <ol>
            <li className="list">
              <Link
                className="spectrum-main-link spectrum-main-link-text link"
                onClick={() => onLinkClick(symmetryRef)}
              >
                {content.link1}
              </Link>
            </li>
            <li className="list">
              <Link
                className="spectrum-main-link spectrum-main-link-text link"
                onClick={() => onLinkClick(chemShiftRef)}
              >
                {content.link2}
              </Link>
            </li>
            <li className="list">
              <Link
                className="spectrum-main-link spectrum-main-link-text link"
                onClick={() => onLinkClick(integrationRef)}
              >
                {content.link3}
              </Link>
            </li>
            <li className="list">
              <Link
                className="spectrum-main-link spectrum-main-link-text link"
                onClick={() => onLinkClick(splittingRef)}
              >
                {content.link4}
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}