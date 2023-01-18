import React from "react";
import { Link } from "react-router-dom";
import "./interpretingSpectrum.css";
import Symmetry from "./Symmetry";
import gsap from "gsap";

export default function BasicAspects() {
  const aspectsRef = React.useRef();
  const symmetryRef = React.useRef();

  const content = {
    heading: "4 Basic\nAspects",
    link1: "SYMMETRY",
    link2: "CHEMICAL SHIFT",
    link3: "INTEGRATION",
    link4: "SPLITTING",
  };

  const onSymmetryClick = (e) => {
    e.preventDefault();
    var tl = gsap.timeline();
    tl.to(aspectsRef.current, { opacity: 0, duration: 0.25 })
      .to(aspectsRef.current, { visibility: "hidden" })
      .to(symmetryRef.current, { visibility: "visible", opacity:1,duration:0.25})
      .to(".back4",{visibility:"visible", opacity:1})
      .to(".back3", { visibility: "hidden"})
  };

  React.useEffect(()=>{
    gsap.from(symmetryRef.current, {opacity: 0, visibility:"hidden"});
  })

  return (
    <>
    <div className = "symmetry" ref={symmetryRef}>
      <Symmetry />
    </div>
      <div className = "aspect" ref={aspectsRef}>
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
              <Link className="spectrum-main-link spectrum-main-link-text">
                {content.link2}
              </Link>
            </li>
            <li className="list">
              <Link className="spectrum-main-link spectrum-main-link-text">
                {content.link3}
              </Link>
            </li>
            <li className="list">
              <Link className="spectrum-main-link spectrum-main-link-text">
                {content.link4}
              </Link>
            </li>
          </ol>
        </div>
      </div>
      </>
  );
}
