import React from "react";
import "./courseUsage.css";
import { useViewport } from "../../viewportContext";
import { ReactComponent as NuclearMagneticResonance } from "../Home/NuclearMagneticResonance.svg";
import NavBar from "../../components/NavBar/navbar2";
import Stack from 'react-bootstrap/Stack';

export default function NMRFundamentals() {
    const { width, height } = useViewport();
    const content = ["General\nChemistry", "Organic\nChemistry", "Physical\nChemistry", "Biomechanical\nInstrumentation", "Advanced\nSynthesis", "Advanced\nSynthesis"];
    
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
                            <button>{o}</button>
                        ))}
                    </Stack>
                </div>
            </div>
        </div>
        </>
    );
}