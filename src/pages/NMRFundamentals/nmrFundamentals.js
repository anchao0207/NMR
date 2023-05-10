import React from "react";
import "./nmrFundamentals.css";
import { ReactComponent as NuclearMagneticResonance } from "../Home/NuclearMagneticResonance.svg";
import NavBar from "../../components/NavBar/navbar";
import Stack from "react-bootstrap/Stack";
import { gsap } from "gsap/all";
import { Link } from "react-router-dom";

export default function NMRFundamentals() {
  const content = [
    "How it Works",
    "NMR\nInstrumentation",
    "Intepreting\nNMR Spectrum",
  ];
  const mainRef = React.useRef(null);
  React.useEffect(() => {
    gsap.to(mainRef.current, { opacity: 1, duration: 1 });
  });

  return (
    <>
      <div className="home">
        <NavBar></NavBar>
        <div className="main-body" ref={mainRef}>
          <div className="navTitle">NMR Fundamentals</div>
          <div className="section1">
            <NuclearMagneticResonance className="NMR" />
          </div>
          <Stack gap={3} className="section2">
            {content.map((o) => {
              if (o === "How it Works")
                return (
                  <button>
                    <Link to="/">{o}</Link>
                  </button>
                );
              if (o === "Intepreting\nNMR Spectrum")
                return (
                  <button>
                    <Link to="/NMRSpectrum">{o}</Link>
                  </button>
                );
              return (
                <button>
                  <Link to="/NMRInstrumentation/">{o}</Link>
                </button>
              );
            })}
          </Stack>
        </div>
      </div>
    </>
  );
}
