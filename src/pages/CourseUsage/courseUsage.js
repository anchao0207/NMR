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
            <Link to="./GeneralChemistry">
              <button>
                General
                <br /> Chemistry
              </button>
            </Link>
            <Link to="./OrganicChemistry">
              <button>
                Organic
                <br /> Chemistry
              </button>
            </Link>
            <Link to="./BiologicalInstrumentation">
              <button>
                Biological
                <br /> Instrumentation
              </button>
            </Link>
            <Link to="./AdvancedSynthesis">
              <button>
                Advanced
                <br /> Synthesis
              </button>
            </Link>
          </Stack>
        </div>
      </div>
    </>
  );
}
