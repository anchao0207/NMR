import React from "react";
import NavBar from "../../../components/NavBar/navbar";
import { ReactComponent as Back } from "../../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";

export default function Stereoselective() {
  const content = {
    subheading: "Stereoselective\nreduction\nof camphor",
    description:
      "H NMR spectroscopy is used to determine the stereoselectivity of the borohydride reduction of camphor, a chiral ketone, through integration of two particular hydrogens in the ",
    description2: "H NMR spectrum of the product mixture.",
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
            <p>
              <sup>1</sup>
              {props.description}
              <sup>1</sup>
              {props.description2}
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
          src={require("../../../assets/chemistry-lab-40156.png")}
          alt=""
        />
        {MainBody(content)}
        <Back className="spectrum-back" onClick={backwardClick}></Back>
      </div>
    </div>
  );
}
