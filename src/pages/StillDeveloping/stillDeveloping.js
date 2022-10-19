import React from "react";
import "./stillDeveloping.css";
import { useViewport } from "../../viewportContext";
import { ReactComponent as NuclearMagneticResonance } from "../Home/NuclearMagneticResonance.svg";
import NavBar from "../../components/NavBar/navbar";

export default function FacultyResearch() {
    const { width, height } = useViewport();

    return (
        <>
        <div className="home">
            <NavBar></NavBar>
            <div className="main-body">
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