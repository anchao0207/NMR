import React from "react";
import "./nmrFundamentals.css";
import { useViewport } from "../../viewportContext";
import { ReactComponent as NuclearMagneticResonance } from "../Home/NuclearMagneticResonance.svg";
import NavBar from "../../components/NavBar/navbar1";
import Stack from 'react-bootstrap/Stack';

export default function NMRFundamentals() {
    const { width, height } = useViewport();
    const content = ["How it Works", "NMR\nInstrumentation", "Intepreting\nNMR Spectrum"];
    
    return (
        <>
        <div className="home">
            <NavBar></NavBar>
            <div className="main-body">
                <div className="section1">
                    <NuclearMagneticResonance className="NMR" />
                </div>
                <div className="section2">
                    <Stack gap={3}>
                        {content.map((o) => {
                            if(o === "How it Works") 
                                return <a href="http://localhost:3000/"><button>{o}</button></a>
                            
                            return <a href="http://localhost:3000/StillDeveloping/"><button>{o}</button></a>
                        })}
                    </Stack>
                </div>
            </div>
        </div>
        </>
    );
}