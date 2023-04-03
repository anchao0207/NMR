import React from "react";
import NavBar from "../../components/NavBar/navbar";
import "./nmrInstrumentation.css";
import { useNavigate } from "react-router-dom";
import SizeMatter from "../../components/Instrumentation/SizeMatter";
import { ReactComponent as Back } from "../../assets/backArrow.svg";
import { gsap } from "gsap/all";


export default function NMRInstrumentation() {
  const mainRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const backwardRef = React.useRef(null);
  
  let navigate = useNavigate();


  React.useEffect(() => {
    gsap.to(mainRef.current, {opacity: 1, duration: 1});
  });

  const backwardClick = () => {
    let path = "/NMRFundamentals/";
    navigate(path);
  };

  return (
    <div className="instrumentation">
      <NavBar></NavBar>
      <div className="instrumentationTitle" ref={titleRef}>
        <span>NMR Instrumentation</span>
      </div>
      <div className="instrumentation-main" ref={mainRef}>
        <SizeMatter />
        <Back
          ref={backwardRef}
          className="spectrum-back"
          onClick={backwardClick}
        ></Back>
      </div>
    </div>
  );
}
