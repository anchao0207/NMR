import React from "react";
import MainBody from "../CourseUsage/MainBody";
import NavBar from "../NavBar/navbar";
import { ReactComponent as Back } from "../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";

export default function KaitieAdelberger() {
  const content = {
    subheading: "Soil Phosphorus",
    description:
      "Professor Adelsberger's research focuses on the characterization of soil phosphorus in prairie soils in order to determine the primary controls on phosphorus availability.\n\nAvailable forms may be affected by processes such as prairie burns, erosion, and animal manuring. Here, we see a student taking a core sample.This graph shows the phosphorus results from samples captured from different prairies at Green Oaks. As you can see, all levels of phosphorus are the same for each prairie.",
  };

  const mainRef = React.useRef(null);

  let navigate = useNavigate();

  React.useEffect(() => {
    gsap.to(mainRef.current, { opacity: 1, duration: 1 });
  });

  const backwardClick = () => {
    let path = "/FacultyResearch";
    navigate(path);
  };

  return (
    <div className="home">
      <NavBar></NavBar>
      <div className="navTitle">Faculty Research</div>
      <div className="main-body" ref={mainRef}>
        <img
          className="image"
          src={require("../../assets/soil.png")}
          alt=""
        />
        {MainBody(content)}
        <Back className="spectrum-back" onClick={backwardClick}></Back>
      </div>
    </div>
  );
}
