import React from "react";
import "./courseUsage.css";
import { ReactComponent as NuclearMagneticResonance } from "../Home/NuclearMagneticResonance.svg";
import NavBar from "../../components/NavBar/navbar";
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap/all";
import { Link } from "react-router-dom";


export default function NMRFundamentals() {
    const content = ["General\nChemistry", "Organic\nChemistry", "Biomechanical\nInstrumentation", "Advanced\nSynthesis"];
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
                <div className="section2">
                    <Stack gap={3}>
                        {content.map((o) => (
                            <Link to="/StillDeveloping/">
                                <button onClick={handleClick(o)}>{o}</button>
                            </Link>
                        ))}
                    </Stack>
                </div>
            </div>
        </div>
        </>
    );
}