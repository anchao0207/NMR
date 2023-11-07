import React from "react";
import NavBar from "../../../components/NavBar/navbar";
import { ReactComponent as Back } from "../../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";

export default function SpectroscopyUnknownLab() {
  const content = {
    subheading: "Spectroscopy\nUnknown Lab",
    description:
      "In this experiment, students determine the structure of two unknown organic compounds (one solid, one liquid) using physical properties—melting point or boiling point, molecular weight, and atom information—and spectroscopic methods—Infrared Spectroscopy and",
      description2: 
        "H and", 
        description3: 
            "C NMR Spectroscopy.",
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
            <p>{props.description}&nbsp;
                <sup>1</sup>{props.description2}&nbsp;
                <sup>13</sup>{props.description3}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const backwardClick = () => {
    let path = "/CourseUsage/OrganicChemistry";
    navigate(path);
  };

  return (
    <div className="home">
      <NavBar></NavBar>
      <div className="main-body" ref={mainRef}>
        <div className="navTitle">Organic Chemistry</div>
        <img
          className="image"
          src={require("../../../assets/Spectroscopy Unknown Lab.jpg")}
          alt=""
        />
        {MainBody(content)}
        <Back className="spectrum-back" onClick={backwardClick}></Back>
      </div>
    </div>
  );
}
