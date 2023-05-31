import React from "react";
import NavBar from "../../../components/NavBar/navbar";
import { ReactComponent as Back } from "../../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";

export default function YeastFermentation() {
  const content = {
    subheading: "Yeast\nFermentation",
    description: "In this experiment, students use ",
    desc2:
      "C NMR spectroscopy to follow the formation of the fermentation products over time.",
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
          <div className="decs-text">
            <p>{props.description}<sup>13</sup>{props.desc2}</p>
          </div>
        </div>
      </div>
    );
  };

  const backwardClick = () => {
    let path = "/CourseUsage/BiologicalInstrumentation/";
    navigate(path);
  };

  return (
    <div className="home">
      <NavBar></NavBar>
      <div className="main-body" ref={mainRef}>
        <div className="navTitle">Biological Instrumentation</div>
        <img
          className="image"
          src={require("../../../assets/cermak_student_140421_0073.png")}
          alt=""
        />
        {MainBody(content)}
        <Back className="spectrum-back" onClick={backwardClick}></Back>
      </div>
    </div>
  );
}
