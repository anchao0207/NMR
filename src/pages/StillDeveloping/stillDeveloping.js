import React from "react";
import "./stillDeveloping.css";
import { ReactComponent as NuclearMagneticResonance } from "../Home/NuclearMagneticResonance.svg";
import NavBar from "../../components/NavBar/navbar";
import { gsap } from "gsap/all";


export default function FacultyResearch() {
  const mainRef = React.useRef(null);
React.useEffect(() => {
    gsap.to(mainRef.current, { opacity: 1, duration: 1 });
  });
    return (
        <>
        <div className="home">
            <NavBar></NavBar>
            <div className="main-body" ref={mainRef}>
                <div className="section1">
                    <NuclearMagneticResonance className="NMR" />
                </div>
                <div className="section2">
                    <text id="note">Still Developing . . .</text>
                </div>
            </div>
        </div>
        </>
    )
}