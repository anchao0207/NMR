import React from "react";
import "./courseUsage.css";
import { ReactComponent as NuclearMagneticResonance } from "../Home/NuclearMagneticResonance.svg";
import NavBar from "../../components/NavBar/navbar";
import Stack from "react-bootstrap/Stack";
import { gsap } from "gsap/all";
import { Link } from "react-router-dom";

export default function NMRFundamentals() {
  const mainRef = React.useRef(null);

  React.useEffect(() => {
    gsap.to(mainRef.current, { opacity: 1, duration: 1 });
  }, [mainRef]);

  return (
    <>
      <div className="home">
        <NavBar></NavBar>
        <div className="main-body" ref={mainRef}>
          <div className="navTitle">Course Usage</div>

          <div className="section1">
            <NuclearMagneticResonance className="NMR" />
          </div>
          {/* <div className="section2"> */}
            <Stack gap={3} className="section2">
                <button>
              <Link to="/GeneralChemistry">
                  General<br/> Chemistry
              </Link>
                  </button>
                <button>
              <Link to="/OrganicChemistry">
                  Organic<br/> Chemistry
              </Link>
                  </button>
                <button>
              <Link to="/BiologicalInstrumentation">
                  Biological<br/> Instrumentation
              </Link>
                  </button>
                <button>
              <Link to="/AdvancedSynthesis">
                  Advanced<br/> Synthesis
              </Link>
                  </button>
            </Stack>
        </div>
      </div>
    </>
  );
}
