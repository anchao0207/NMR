import React from "react";
import MainBody from "../../../components/CourseUsage/MainBody";
import NavBar from "../../../components/NavBar/navbar";
import { ReactComponent as Back } from "../../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";

export default function Stereoselective() {
  const content = {
    subheading: "Stereoselective\nreduction\nof camphor",
    description:
      "1H NMR spectroscopy is used to determine the stereoselectivity of the borohydride reduction of camphor, a chiral ketone, through integration of two particular hydrogens in the 1H NMR spectrum of the product mixture.",
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
          src={require("../../../assets/chemistry-lab-40156.png")}
          alt=""
        />
        {MainBody(content)}
        <Back className="spectrum-back" onClick={backwardClick}></Back>
      </div>
    </div>
  );
}
