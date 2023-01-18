import React from "react";
import "./research.css";
import NavBar4 from "../NavBar/navbar4"
import { ReactComponent as Back } from "../../pages/Home/backArrow.svg";
import { ReactComponent as Forward } from "../../pages/Home/forwardArrow.svg";
import { ReactComponent as ResearchPhosphorus } from "../../components/FacultyResearch/Ligand Synthesis FeBr2.svg";

const content = {
    description1: "Synthesis of phosphorus derivatives of castor and lesquerella oils",
    description2: "This project is a collaboration with chemists at the U.S. Department of Agriculture, Agricultural Research Service (USDA-ARS), Bio-Oils Research (BOR) Group in Peoria, IL, dealing with the synthesis of phosphorus derivatives of castor and lesquerella oils.\n\nWe are working to convert the primary naturally-occurring fatty acids found in castor oil and lesquerella oil into a variety of phosphorus derivatives, which may have interesting biological activity."
};

const MainBody = (props) => {
    const crystalRef = React.useRef(null);
    const backRef = React.useRef(null);
    const forwardRef = React.useRef(null);
    return(
        <div className="home">
            <NavBar4></NavBar4>
            <div className="main-body" >
                <ResearchPhosphorus width="65vw" height="82vh" ref={crystalRef}> </ResearchPhosphorus>
            </div>
            <div className="description">
                <div className = "subHeading" >
                    <p> {props.description1}</p>
                </div>
                <div className="decs-text">
                    <p>{props.description2}</p>
                </div>
            </div>
            <a href="http://localhost:3000/Faculty2Main/">
                <Back className="back" ref={backRef}></Back>
            </a>
            <a href="http://localhost:3000/FacultyResearch/">
                <Forward className="forward" ref={forwardRef}></Forward>
            </a>
        </div>
    );
};

const BodyFirstPage = () => {
    return <>{MainBody(content)}</>;
  };
  export default BodyFirstPage;