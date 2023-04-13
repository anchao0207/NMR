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
            <Link to="/KaitieAdelberger">
              <button>Katie Adelsberger, PhD</button>
            </Link>
            <Link to="/DianaCermak">
              <button>Diana Cermak, PhD</button>
            </Link>
            <Link to="/HelenHoyt">
              <button>Helen Hoyt, PhD</button>
            </Link>
          </Stack>
        </div>
      </div>
    </>
  );
}
