import React from "react";
import MainBody from "../../components/CourseUsage/MainBody";
import NavBar from "../../components/NavBar/navbar";
import { ReactComponent as Back } from "../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";

export default function HelenHoyt() {
  const content = {
    subheading: "Green\nChemistry",
    description:
      "Dr. Hoyt’s research resides primarily in the area of Green Chemistry by synthesis of Inorganic / Organometallic catalysts to form desirable Organic products.\n\nThe Hoyt research group focuses on catalyst design, following a green chemistry approach of incorporating abundant and nontoxic metals (iron & copper) into strategically designed compounds to catalyze the formation of important organic chemical products. In our work, we prepare catalysts that have never before been made, and we collect data (NMR spectroscopy included) to solve the puzzles of their structure, properties, and reactivity.",
  };

  const mainRef = React.useRef(null);

  let navigate = useNavigate();

  React.useEffect(() => {
    gsap.to(mainRef.current, { opacity: 1, duration: 1 });
  });

  const backwardClick = () => {
    let path = "/FacultyResearch/";
    navigate(path);
  };

  return (
    <div className="home">
      <NavBar></NavBar>
      <div className="navTitle">Faculty Research</div>
      <div className="main-body" ref={mainRef}>
        <img
          className="image"
          src={require("../../assets/greenchemistry.png")}
          alt=""
        />
        {MainBody(content)}
        <Back className="spectrum-back" onClick={backwardClick}></Back>
      </div>
    </div>
  );
}
