import React from "react";
import "./nmrFundamentals.css";
import { useViewport } from "../../viewportContext";
import { ReactComponent as NuclearMagneticResonance } from "../Home/NuclearMagneticResonance.svg";
import NavBar from "../../components/NavBar/navbar1";
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from "react-router-dom";

export default function NMRFundamentals() {
    const { width, height } = useViewport();
    const content = ["How it Works", "NMR\nInstrumentation", "Intepreting\nNMR Spectrum"];
    
    let navigate = useNavigate();
    const handleClick = (e) => {
        if(e = "How it Works"){
            let path = "http://localhost:3000/";
            navigate(path);
        }
        path = "http://localhost:3000/StillDeveloping/";
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
                <div className="section2">
                    <Stack gap={3}>
                        {content.map((o) => {
                            // <button onClick={handleClick(o)}>{o}</button>
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