import React from "react";
import "../CourseUsage/courseUsage.css";
import { ReactComponent as NuclearMagneticResonance } from "../Home/NuclearMagneticResonance.svg";
import NavBar from "../../components/NavBar/navbar";
import Stack from "react-bootstrap/Stack";
import { gsap } from "gsap/all";
import { Link } from "react-router-dom";

export default function About() {
  const mainRef = React.useRef(null);

  React.useEffect(() => {
    gsap.to(mainRef.current, { opacity: 1, duration: 1 });
  }, [mainRef]);

  return (
    <>
      <div className="home">
        <NavBar></NavBar>
        <div className="main-body" ref={mainRef}>
          <div className="navTitle">About this Project</div>

          <div className="section1">
            <NuclearMagneticResonance className="NMR" />
          </div>
            <Stack gap={3} className="section2">
                <button>
              <Link to="/StillDeveloping">
                  About
              </Link>
                  </button>
                <button>
              <Link to="/StillDeveloping">
                  Credit
              </Link>
                  </button>
                <button>
              <Link to="/StillDeveloping">
                  Special Thanks
              </Link>
                  </button>
            </Stack>
        </div>
      </div>
    </>
  );
}
