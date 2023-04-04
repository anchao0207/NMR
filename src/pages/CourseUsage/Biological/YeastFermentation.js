import React from "react";
import MainBody from "../../../components/CourseUsage/MainBody";
import NavBar from "../../../components/NavBar/navbar";
import { ReactComponent as Back } from "../../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";

export default function YeastFermentation() {
  const content = {
    subheading: "Yeast\nFermentation",
    description:
      "In this experiment, students use 13C NMR spectroscopy to follow the formation of the fermentation products over time.",
  };

  const mainRef = React.useRef(null);

  let navigate = useNavigate();

  React.useEffect(() => {
    gsap.to(mainRef.current, { opacity: 1, duration: 1 });
  });

  const backwardClick = () => {
    let path = "/BiologicalInstrumentation/";
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
