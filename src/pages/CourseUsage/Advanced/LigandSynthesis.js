import React from "react";
import MainBody from "../../../components/CourseUsage/MainBody";
import NavBar from "../../../components/NavBar/navbar";
import { ReactComponent as Back } from "../../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";

export default function LigandSynthesis() {
  const content = {
    subheading: "Ligand\nSynthesis",
    description:
      "Students prepare new compounds to bind to and support transition metal catalysts, using 1D (1H, 13C, DEPT-135), and 2D (HSQC, HMBC) NMR experiments to identify the new products they have formed.",
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
          src={require("../../../assets/Rectangle 93.png")}
          alt=""
        />
        {MainBody(content)}
        <Back className="spectrum-back" onClick={backwardClick}></Back>
      </div>
    </div>
  );
}
