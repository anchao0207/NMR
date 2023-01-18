import React from "react";
import "./facultyResearch.css";
import { useViewport } from "../../viewportContext";
import Stack from 'react-bootstrap/Stack';
import { gsap } from "gsap/all";
import { ReactComponent as Back } from "./backArrow.svg";
import { ReactComponent as Forward } from "./forwardArrow.svg";
import { ReactComponent as NuclearMagneticResonance } from "../Home/NuclearMagneticResonance.svg";
import NavBar from "../../components/NavBar/navbar3";
import Faculty1Soil from "../../components/FacultyResearch/faculty1Soil";
import Faculty2Asym from "../../components/FacultyResearch/faculty2Asym";
import Faculty2Main from "../../components/FacultyResearch/faculty2Main";
import Faculty2Phospho from "../../components/FacultyResearch/faculty2Phospho";
import Faculty3Green from "../../components/FacultyResearch/faculty3Green";

export default function FacultyResearch() {
    const nmrRef = React.useRef(null);
    const next1Ref = React.useRef(null);
    const back1Ref = React.useRef(null);
    const next2Ref = React.useRef(null);
    const back2Ref = React.useRef(null);
    const next3Ref = React.useRef(null);
    const back3Ref = React.useRef(null);
    const next4Ref = React.useRef(null);
    const back4Ref = React.useRef(null);
    const cmainRef = React.useRef(null);
    const cassymRef = React.useRef(null);
    const cphosphoRef = React.useRef(null);
    const asoilRef = React.useRef(null);
    const hgreenRef = React.useRef(null);

    return (
        <>
        <div className="researchHome">
            <NavBar></NavBar>
            <div className="bodySection">
                <div className="leftSection">
                    <NuclearMagneticResonance className="NMR" />
                </div>
                <div className="rightSection">
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