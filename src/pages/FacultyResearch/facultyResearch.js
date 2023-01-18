import React from "react";
import "./facultyResearch.css";
import { useViewport } from "../../viewportContext";
import Stack from 'react-bootstrap/Stack';
import { ReactComponent as NuclearMagneticResonance } from "../Home/NuclearMagneticResonance.svg";
import NavBar from "../../components/NavBar/navbar3";

export default function FacultyResearch() {
    return (
        <>
        <div className="researchHome">
            <NavBar></NavBar>
            <div className="main-body">
                <div className="section1">
                    <NuclearMagneticResonance className="NMR" />
                </div>
                <div className="section2">
                    <Stack gap={3}>
                        <a href="http://localhost:3000/Faculty1Soil/">
                                <button>Katie Adelsberger</button>
                        </a>
                        <a href="http://localhost:3000/Faculty2Main/">
                                <button>Diana Cermak</button>
                        </a>
                        <a href="http://localhost:3000/Faculty3Green/">
                                <button>Helen Hoyt</button>
                        </a>
                    </Stack>
                </div>
            </div>
        </div>
        </>
    )
}