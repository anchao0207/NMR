import React from "react";
import MainBody from "../../../components/CourseUsage/MainBody";
import NavBar from "../../../components/NavBar/navbar";
import { ReactComponent as Back } from "../../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

export default function AdvancedSynthesis() {
  const content = {
    heading: "Advanced\nSynthesis",
  };

  const mainRef = React.useRef(null);

  let navigate = useNavigate();

  React.useEffect(() => {
    gsap.to(mainRef.current, { opacity: 1, duration: 1 });
  });

  const backwardClick = () => {
    let path = "/CourseUsage/";
    navigate(path);
  };

  return (
    <div className="home">
      <NavBar></NavBar>
      <div className="main-body" ref={mainRef}>
        <div className="navTitle">Advanced Synthesis</div>
        {MainBody(content)}

        <Stack gap={3} className="section2">
          <Link to="/LigandSynthesis">
            <button>Ligand Synthesis</button>
          </Link>
          <Link to="/PrecatalystSynthesis">
            <button>Precatalyst Synthesis</button>
          </Link>
        </Stack>
        <Back className="spectrum-back" onClick={backwardClick}></Back>
      </div>
    </div>
  );
}
