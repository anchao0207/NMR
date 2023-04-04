import React from "react";
import MainBody from "../../../components/CourseUsage/MainBody";
import NavBar from "../../../components/NavBar/navbar";
import { ReactComponent as Back } from "../../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";

export default function PrecatalystSynthesis() {
  const content = {
    subheading: "Precatalyst\nSynthesis",
    description:
      "Students bind their synthesized ligands to the iron(II) bromide to form precatalysts that are paramagnetic, which are then identified in part of 1H NMR spectroscopy using modified parameters to accommodate the magnetism from the metal center.",
  };

  const mainRef = React.useRef(null);

  let navigate = useNavigate();

  React.useEffect(() => {
    gsap.to(mainRef.current, { opacity: 1, duration: 1 });
  });

  const backwardClick = () => {
    let path = "/AdvancedSynthesis/";
    navigate(path);
  };

  return (
    <div className="home">
      <NavBar></NavBar>
      <div className="main-body" ref={mainRef}>
        <div className="navTitle">Advanced Synthesis</div>
        <img
          className="image"
          src={require("../../../assets/4e2 - Precatalyst Synthesis - DS mesparent timelapse images 1.png")}
          alt=""
        />
        {MainBody(content)}
        <Back className="spectrum-back" onClick={backwardClick}></Back>
      </div>
    </div>
  );
}
