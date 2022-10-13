import React from "react";
import "./home.css";
import { useViewport } from "../../viewportContext";
import { ReactComponent as NuclearMagneticResonance } from "./NuclearMagneticResonance.svg";
import { ReactComponent as PlayButton } from "./playButton.svg";
import { gsap, ScrollTrigger } from "gsap/all";
import NavBar from "../../components/NavBar/navbar";
import Main from "../../components/Main/main";

export default function Home() {
  const { width, height } = useViewport();
  const nmrRef = React.useRef(null);
  const hiwRef = React.useRef(null);
  const mcRef = React.useRef(null);

  const startClick = () => {
    var tl = gsap.timeline();
    tl.add("start")
      .to(nmrRef.current, { opacity: 0, duration: 1 }, "start")
      .to(".play-button", { opacity: 0, duration: 1 }, "start")
      .to(nmrRef.current, { visibility:'hidden'})
      .to(".play-button", { visibility:'hidden'})
      .to(hiwRef.current, { visibility:'visible', opacity: 1, duration: 1, delay: 1 })
      .to(hiwRef.current, { opacity: 0, duration: 1, delay: 1 })
      .to(hiwRef.current, { visibility:'hidden'})
      .to(mcRef.current, { visibility: 'visible', opacity:1, duration: 1, delay: 1 });
  };
  return (
    <>
      <div className="home">
        <NavBar></NavBar>
        <div className="main-body">
          <div className="section1">
            <NuclearMagneticResonance ref={nmrRef} className="NMR" />
          </div>
          <div className="section1">
            <div className="HIW" ref={hiwRef}>
              <span>
                HOW IT
                <br />
                WORKS
              </span>
            </div>
          </div>
          <div className="section2">
            <PlayButton className="play-button" onClick={startClick} />
          </div>
          <div className="main-component" ref={mcRef}>
            <Main></Main>
          </div>
        </div>
      </div>
    </>
  );
}
