import React from "react";
import MainBody from "../../CourseUsage/MainBody";
import NavBar from "../../NavBar/navbar";
import { ReactComponent as Back } from "../../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";



export default function SynthesisPhosphorus() {
  const content = {
    subheading: "Synthesis of phosphorus\nderivatives of castor and\nlesquerella oils",
    description:
      "This project is a collaboration with chemists at the U.S. Department of Agriculture, Agricultural Research Service (USDA-ARS), Bio-Oils Research (BOR) Group in Peoria, IL, dealing with the synthesis of phosphorus derivatives of castor and lesquerella oils.\n\nWe are working to convert the primary naturally-occurring fatty acids found in castor oil and lesquerella oil into a variety of phosphorus derivatives, which may have interesting biological activity.",
  
    };

  const mainRef = React.useRef(null);

  let navigate = useNavigate();

  React.useEffect(() => {
    gsap.to(mainRef.current, {opacity: 1, duration: 1});
  });

    const backwardClick = () => {
      let path = "/FacultyResearch/DianaCermak/";
      navigate(path);
    };


  return (
    <div className = "home">
      <NavBar></NavBar>
      <div className="navTitle">Dr. Diana Cermak</div>
      <div className="main-body" ref={mainRef}>
        <img className="image" src={require("../../../assets/Student_2.png")} alt="" />
        {MainBody(content)}
        <Back
          className="spectrum-back"
          onClick={backwardClick}
        ></Back>
        </div>
    </div>
  );
}
