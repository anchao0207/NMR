import React from "react";
import "./facultyResearch.css";
import Stack from "react-bootstrap/Stack";
import { gsap } from "gsap/all";
import { Link } from "react-router-dom";
import { ReactComponent as NuclearMagneticResonance } from "../Home/NuclearMagneticResonance.svg";
import NavBar from "../../components/NavBar/navbar";

export default function FacultyResearch() {
  const mainRef = React.useRef(null);

  React.useEffect(() => {
    gsap.to(mainRef.current, { opacity: 1, duration: 1 });
  });

  return (
    <>
      <div className="researchHome">
        <NavBar></NavBar>
        <div className="main-body" ref={mainRef}>
          <div className="navTitle">Faculty Research</div>

          <div className="section1">
            <NuclearMagneticResonance className="NMR" />
          </div>
          <Stack className="section2">
            <button>
              <Link to="/KaitieAdelberger">Katie Adelsberger, PhD</Link>
            </button>
            <button>
              <Link to="/DianaCermak">Diana Cermak, PhD</Link>
            </button>
            <button>
              <Link to="/HelenHoyt">Helen Hoyt, PhD</Link>
            </button>
          </Stack>
        </div>
      </div>
    </>
  );
}
