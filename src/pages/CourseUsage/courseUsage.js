import React from "react";
import "./courseUsage.css";
import { useViewport } from "../../viewportContext";
import { ReactComponent as NuclearMagneticResonance } from "../Home/NuclearMagneticResonance.svg";
import NavBar from "../../components/NavBar/navbar2";
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from "react-router-dom";

export default function NMRFundamentals() {
    const { width, height } = useViewport();
    const content = ["General\nChemistry", "Organic\nChemistry", "Physical\nChemistry", "Biomechanical\nInstrumentation", "Advanced\nSynthesis", "Advanced\nSynthesis"];
    
    let navigate = useNavigate();
    const handleClick = (name) => {
        let path = "/StillDeveloping/";
        navigate(path);
    }

    return (
        <>
        <div className="home">
            <NavBar></NavBar>
            <div className="main-body">
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