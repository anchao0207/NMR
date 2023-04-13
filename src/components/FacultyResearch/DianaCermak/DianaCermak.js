import React from "react";
import MainBody from "../../CourseUsage/MainBody";
import NavBar from "../../NavBar/navbar";
import Stack from "react-bootstrap/Stack";
import { ReactComponent as Back } from "../../../assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";
import { Link } from "react-router-dom";


export default function DianaCermak() {
    const content = {
      heading: "Dr. Diana\nCermak",
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
        <div className="main-body" ref={mainRef}>
          <div className="navTitle">Faculty Research</div>
          {MainBody(content)}
          <Stack gap={3} className="section2">
            <Link to="./AsymmetricSynthesis">
              <button>
              Asymmetric Synthesis
              </button>
            </Link>
            <Link to="./SynthesisPhosphorus">
              <button>
              Synthesis of phosphorus derivatives
              </button>
            </Link>
          </Stack>
          <Back className="spectrum-back" onClick={backwardClick}></Back>
        </div>
      </div>
    );
  }
  