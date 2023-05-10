import React from "react";
import MainBody from "../../CourseUsage/MainBody";
import NavBar from "../../NavBar/navbar";
import { ReactComponent as Back } from "../../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";



export default function AsymmetricSynthesis() {
  const content = {
    subheading: "Asymmetric synthesis of\ncamphor-based sulfonyl\nimines and ketones",
    description:
      "This project focuses on the asymmetric synthesis of camphor-based sulfonyl imines and ketones.\n\nThese molecules can be converted to oxaziridines, an asymmetric, electrophilic oxygen source, or to sulfonylamines, which have potential use as a chiral auxiliary—a molecule which can transfer chirality to an achiral molecule.\n\nWe are working to convert the primary naturally-occurring fatty acids found in castor oil and lesquerella oil into a variety of phosphorus derivatives, which may have interesting biological activity.",
  
    };

  const mainRef = React.useRef(null);

  let navigate = useNavigate();

  React.useEffect(() => {
    gsap.to(mainRef.current, {opacity: 1, duration: 1});
  });

    const backwardClick = () => {
      let path = "/DianaCermak/";
      navigate(path);
    };


  return (
    <div className = "home">
      <NavBar></NavBar>
      <div className="navTitle">Dr. Diana Cermak</div>
      <div className="main-body" ref={mainRef}>
        <img className="image" src={require("../../../assets/Cermak-Diana-Chemistry-Lab-and-Students-0020.jpg")} alt="" />
        {MainBody(content)}
        <Back
          className="spectrum-back"
          onClick={backwardClick}
        ></Back>
        </div>
    </div>
  );
}
