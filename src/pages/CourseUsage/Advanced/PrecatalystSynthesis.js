import React from "react";
import NavBar from "../../../components/NavBar/navbar";
import { ReactComponent as Back } from "../../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";

export default function PrecatalystSynthesis() {
  const content = {
    subheading: "Precatalyst\nSynthesis",
    description:
      "Students bind their synthesized ligands to the iron(II) bromide to form precatalysts that are paramagnetic, which are then identified in part of ",
      desc2:"H NMR spectroscopy using modified parameters to accommodate the magnetism from the metal center.",
  };

  const mainRef = React.useRef(null);

  let navigate = useNavigate();

  React.useEffect(() => {
    gsap.to(mainRef.current, { opacity: 1, duration: 1 });
  });

  const MainBody = (props) => {
    return (
      <div className="container">
        <div className="header">
          <div className="head-text">{props.heading}</div>
        </div>
        <div className="description">
          <div className="sub-heading">{props.subheading}</div>
          <div className="decs-text"><p>{props.description}<sup>1</sup>{content.desc2}</p></div>
        </div>
      </div>
    );
  };

  const backwardClick = () => {
    let path = "/CourseUsage/AdvancedSynthesis";
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
