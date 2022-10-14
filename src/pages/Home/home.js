import React from "react";
import "./home.css";
import { useViewport } from "../../viewportContext";
import { ReactComponent as NuclearMagneticResonance } from "./NuclearMagneticResonance.svg";
import { ReactComponent as PlayButton } from "./playButton.svg";
import { gsap, ScrollTrigger } from "gsap/all";
import NavBar from "../../components/NavBar/navbar";
import Technology from "../../components/Main/technology";
import Magnet from "../../components/Main/magnet";
import Temperature from "../../components/Main/temperature";
import Sample from "../../components/Main/sample";
import Pulse from "../../components/Main/pulse";
import FourNuclei from "../../components/Main/fourNuclei";
import Acquisition from "../../components/Main/acquisition";
import Field from "../../components/Main/field";
import Nuclei from "../../components/Main/nuclei";
import HNuclei from "../../components/Main/hNuclei";
import Transformation from "../../components/Main/transformation";
import BiggerPicture from "../../components/Main/biggerPicture";
import Spectrum from "../../components/Main/spectrum";

export default function Home() {
  const { width, height } = useViewport();
  const nmrRef = React.useRef(null);
  const hiwRef = React.useRef(null);
  const techRef = React.useRef(null);

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
      .to(techRef.current, { visibility: 'visible', opacity:1, duration: 1, delay: 1 });
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
          <div className="main-component" ref={techRef}>
            <Technology></Technology>
          </div>
          <div>
            
          </div>
          {/* <div className="main-component" ref={Ref}>
            <Magnet></Magnet>
          </div> */}
          {/* <div className="main-component" ref={mcRef}>
            <Temperature></Temperature>
          </div> */}
          {/* <div className="main-component" ref={mcRef}>
            <Sample></Sample>
          </div> */}
          {/* <div className="main-component" ref={mcRef}>
            <Field></Field>
          </div> */}
          {/* <div className="main-component" ref={mcRef}>
            <Pulse></Pulse>
          </div> */}
          {/* <div className="main-component" ref={mcRef}>
            <Nuclei></Nuclei>
          </div> */}
          {/* <div className="main-component" ref={mcRef}>
            <FourNuclei></FourNuclei>
          </div> */}
          {/* <div className="main-component" ref={mcRef}>
            <HNuclei></HNuclei>
          </div> */}
          {/* <div className="main-component" ref={mcRef}>
            <Acquisition></Acquisition>
          </div> */}
          {/* <div className="main-component" ref={mcRef}>
            <Transformation></Transformation>
          </div> */}
          {/* <div className="main-component" ref={mcRef}>
            <Spectrum></Spectrum>
          </div> */}
          {/* <div className="main-component" ref={mcRef}>
            <BiggerPicture></BiggerPicture>
          </div> */}
        </div>
      </div>
    </>
  );
}
