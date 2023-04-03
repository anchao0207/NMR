import React from "react";
import "./facultyResearch.css";
import Stack from 'react-bootstrap/Stack';
import { gsap } from "gsap/all";
// import { ReactComponent as Back } from "./backArrow.svg";
// import { ReactComponent as Forward } from "./forwardArrow.svg";
import { ReactComponent as NuclearMagneticResonance } from "../Home/NuclearMagneticResonance.svg";
import NavBar from "../../components/NavBar/navbar3";

export default function FacultyResearch() {
  const mainRef = React.useRef(null);


    React.useEffect(() => {
        gsap.to(mainRef.current, {opacity: 1, duration: 1});
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
                        <a href="/Faculty1Soil/">
                                <button>Katie Adelsberger</button>
                        </a>
                        <a href="/Faculty2Main/">
                                <button>Diana Cermak</button>
                        </a>
                        <a href="/Faculty3Green/">
                                <button>Helen Hoyt</button>
                        </a>
                    </Stack>
                </div>
            </div>
        </div>
    </>
    )
}