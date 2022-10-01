import React from "react";
import "./home.css";
import { useViewport } from "../../viewportContext";
import { ReactComponent as NuclearMagneticResonance } from "./NuclearMagneticResonance.svg";
import { ReactComponent as PlayButton } from "./playButton.svg";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { width, height } = useViewport();
  const nmrRef = React.useRef(null);
  const hiwRef = React.useRef(null);

  const startClick = () => {
    gsap.to(nmrRef.current, {opacity:0, duration: 1});
    gsap.to(hiwRef.current, {opacity:1, duration: 1, delay:1.5})
    gsap.to(".play-button", {opacity:0,duration:1})
    gsap.to(hiwRef.current, {opacity:0, duration: 1, delay:3})
    
  };
  return (
    <div className="home">
      <div className="main">
        <div className="section1">
          <NuclearMagneticResonance ref={nmrRef} className="NMR" />
        </div>
        <div className="section1">
          <div className="HIW" ref={hiwRef}>
            <span>HOW IT</span>
            <br/>
            <span>WORKS</span>
          </div>
        </div>
        <div className="section2">
          <PlayButton className="play-button" onClick={startClick} />
        </div>
      </div>
    </div>
  );
}
