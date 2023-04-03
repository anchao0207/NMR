import React from "react";
import "./courseUsage.css";
import { ReactComponent as NuclearMagneticResonance } from "../Home/NuclearMagneticResonance.svg";
import NavBar from "../../components/NavBar/navbar";
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";


export default function NMRFundamentals() {
    const content = ["General\nChemistry", "Organic\nChemistry", "Physical\nChemistry", "Biomechanical\nInstrumentation", "Advanced\nSynthesis", "Advanced\nSynthesis"];
    const mainRef = React.useRef(null)
    let navigate = useNavigate();

    React.useEffect(()=>{
        gsap.to(mainRef.current, {opacity: 1, duration: 1});
      },[mainRef])

    const handleClick = (name) => {
        let path = "/StillDeveloping/";
        navigate(path);
    }

    return (
        <>
        <div className="home">
            <NavBar></NavBar>
            <div className="main-body" ref={mainRef}>
                <div className="section1">
                    <NuclearMagneticResonance className="NMR" />
                </div>
                <div className="section2" id="course">
                    <Stack gap={3}>
                        {content.map((o) => (
                            <a href="/StillDeveloping/">
                                <button onClick={handleClick(o)}>{o}</button>
                            </a>
                        ))}
                    </Stack>
                </div>
            </div>
        </div>
        </>
    );
}