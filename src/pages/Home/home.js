import React from "react";
import "./home.css";
import { useViewport } from "../../viewportContext";
import { ReactComponent as NuclearMagneticResonance } from "./NuclearMagneticResonance.svg";
import { ReactComponent as PlayButton } from "./playButton.svg";
import { ReactComponent as Back } from "./backArrow.svg";
import { ReactComponent as Forward } from "./forwardArrow.svg";
import { gsap, ScrollTrigger } from "gsap/all";
import NavBar from "../../components/NavBar/navbar1";
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
  const playRef = React.useRef(null);
  const nmrRef = React.useRef(null);
  const hiwRef = React.useRef(null);
  const techRef = React.useRef(null);
  const magnetRef = React.useRef(null);
  const back1Ref = React.useRef(null);
  const text1Ref = React.useRef(null);
  const forward1Ref = React.useRef(null);
  const back2Ref = React.useRef(null);
  const text2Ref = React.useRef(null);
  const forward2Ref = React.useRef(null);

  const startClick = () => {
    var tl1= gsap.timeline();
    tl1.add("start")
      .to(nmrRef.current, { opacity: 0, duration: 1 }, "start")
      .to(playRef.current, { opacity: 0, duration: 1 }, "start")
      .to(nmrRef.current, { visibility:'hidden'})
      .to(playRef.current, { visibility:'hidden'})
      .to(hiwRef.current, { visibility:'visible', opacity: 1, duration: 1, delay: 1 })
      .to(hiwRef.current, { opacity: 0, duration: 1, delay: 1 })
      .to(hiwRef.current, { visibility:'hidden'})
      .to(techRef.current, { visibility: 'visible', opacity:1, duration: 1, delay: 1 }, 5)
      .to(back1Ref.current, {visibility: 'visible', opacity:1, duration: 1, delay: 1}, 5) 
      .to(text1Ref.current, {visibility: 'visible', opacity:1, duration: 1, delay: 1}, 5) 
      .to(forward1Ref.current, {visibility: 'visible', opacity:1, duration: 1, delay: 1}, 5);
  };

  const back1Click = () => {
    var tl2 = gsap.timeline();
    tl2.add("start")
      .to(back1Ref.current, { opacity: 0, duration: 0.1 }, "start")
      .to(forward1Ref.current, { opacity: 0, duration: 0.1 }, "start")
      .to(techRef.current, { opacity: 0, duration: 0.1 }, "start")
      .to(text1Ref.current, { opacity: 0, duration: 0.1 }, "start")
      .to(back1Ref.current, { visibility:'hidden'})
      .to(forward1Ref.current, { visibility:'hidden'})
      .to(techRef.current, { visibility:'hidden'})
      .to(text1Ref.current, { visibility:'hidden'})
      .to(nmrRef.current, {visibility: 'visible', opacity:1, duration: 0.1}, 0.1)
      .to(playRef.current, {visibility: 'visible', opacity:1, duration: 0.1}, 0.1);
  }
  const forward1Click = () => {
    var tl3 = gsap.timeline();
    tl3.add("start")
      .to(back1Ref.current, { opacity: 0, duration: 0.1 }, "start")
      .to(forward1Ref.current, { opacity: 0, duration: 0.1 }, "start")
      .to(techRef.current, { opacity: 0, duration: 0.1 }, "start")
      .to(text1Ref.current, { opacity: 0, duration: 0.1 }, "start")
      .to(back1Ref.current, { visibility:'hidden'})
      .to(forward1Ref.current, { visibility:'hidden'})
      .to(techRef.current, { visibility:'hidden'})
      .to(text1Ref.current, { visibility:'hidden'})
      .to(back2Ref.current, {visibility: 'visible', opacity:1, duration: 0.1}, 0.1)
      .to(forward2Ref.current, {visibility: 'visible', opacity:1, duration: 0.1}, 0.1)
      .to(text2Ref.current, {visibility: 'visible', opacity:1, duration: 0.1}, 0.1)
      .to(magnetRef.current, { visibility: 'visible', opacity:1, duration: 0.1}, 0.1)
  }
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
            <PlayButton className="play-button" onClick={startClick} ref={playRef}/>
          </div>

          <div className="main-component" ref={techRef}>
            <Technology></Technology>
          </div>
          <Back className="back" ref={back1Ref} onClick={back1Click}/>
          <div className="page" ref={text1Ref}>
            <text className="textPage">1/13</text>
          </div>
          <Forward className="forward" ref={forward1Ref} onClick={forward1Click}/>

          <div className="main-component" ref={magnetRef}>
            <Magnet></Magnet>
          </div>
          <Back className="back" ref={back2Ref}/>
          <div className="page" ref={text2Ref}>
            <text className="textPage">2/13</text>
          </div>
          <Forward className="forward" ref={forward2Ref}/>
          
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

