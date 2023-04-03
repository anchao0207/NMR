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
          <div className="leftSection">
            <NuclearMagneticResonance className="NMR" />
          </div>
          <div className="rightSection">
            <Stack gap={3}>
              <Link to="/Faculty1Soil/">
                <button>Katie Adelsberger</button>
              </Link>
              <Link to="/Faculty2Main/">
                <button>Diana Cermak</button>
              </Link>
              <Link to="/Faculty3Green/">
                <button>Helen Hoyt</button>
              </Link>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}
