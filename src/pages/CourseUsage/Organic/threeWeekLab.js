import React from "react";
import NavBar from "../../../components/NavBar/navbar";
import { ReactComponent as Back } from "../../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";

export default function ThreeWeekLab() {
  const content = {
    subheading: "3-week lab\nsynthesis project",
    description:
      "H and ",
      description2:"C NMR spectroscopy are used to characterize three reaction products during a 3-week synthesis project which culminates in the synthesis of 5, 5-diphenyl-4-penten-2-one.",
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
              <sup>13</sup>
              {props.description2}
            </p>
          </div>
        </div>
      </div>
    );
  };

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
          src={require("../../../assets/chemistry.png")}
          alt=""
        />
        {MainBody(content)}
        <Back className="spectrum-back" onClick={backwardClick}></Back>
      </div>
    </div>
  );
}
