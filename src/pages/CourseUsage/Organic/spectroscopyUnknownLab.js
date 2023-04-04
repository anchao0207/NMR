import React from "react";
import MainBody from "../../../components/CourseUsage/MainBody"
import NavBar from "../../../components/NavBar/navbar";
import { ReactComponent as Back } from "../../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";

export default function SpectroscopyUnknownLab() {
  const content = {
    subheading: "Spectroscopy\nUnknown Lab",
    description:
      "13C NMR spectroscopy is used to distinguish the number of types of carbon atoms among a set of isomer compounds with the same molecular formula but different structures.",
  };

  const mainRef = React.useRef(null);

  let navigate = useNavigate();

  React.useEffect(() => {
    gsap.to(mainRef.current, { opacity: 1, duration: 1 });
  });

  const backwardClick = () => {
    let path = "/OrganicChemistry/";
    navigate(path);
  };

  return (
    <div className="home">
      <NavBar></NavBar>
      <div className="main-body" ref={mainRef}>
        <div className="navTitle">Organic Chemistry</div>
        <img
          className="image"
          src={require("../../../assets/chemistry-lab.png")}
          alt=""
        />
        {MainBody(content)}
        <Back className="spectrum-back" onClick={backwardClick}></Back>
      </div>
    </div>
  );
}
