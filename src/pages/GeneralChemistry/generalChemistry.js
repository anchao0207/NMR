import React from "react";
import "./generalChemistry.css";
import { useViewport } from "../../viewportContext";
import ThreeA1 from "../../components/CourseUsage/threeA1";
import NavBar from "../../components/NavBar/navbar2";
import Stack from 'react-bootstrap/Stack';
import { ReactComponent as Back } from "../../pages/Home/backArrow.svg";
import { ReactComponent as Forward } from "../../pages/Home/forwardArrow.svg";

export default function NMRFundamentals() {
    const { width, height } = useViewport();
    // const content = ["General\nChemistry", "Organic\nChemistry", "Physical\nChemistry", "Biomechanical\nInstrumentation", "Advanced\nSynthesis", "Advanced\nSynthesis"];
    
    // let navigate = useNavigate();
    // const handleClick = (name) => {
    //     let path = "http://localhost:3000/StillDeveloping/";
    //     navigate(path);
    // }

    return (
        <>
        <div className="home">
            <NavBar></NavBar>
            <div className="title">
                <span>General Chemistry</span>
            </div>
            <div className="main-body">
                <ThreeA1></ThreeA1>                
                <a href="http://localhost:3000/CourseUsage/">
                    <Back className="back3a1"/>
                </a>               
                <a href="http://localhost:3000/CourseUsage/">
                    <Forward className="forward3a1"/>
                </a>
            </div>
        </div>
        </>
    );
}