import React from "react";
import "./research.css";
import NavBar4 from "../NavBar/navbar"
import { ReactComponent as BackArrow } from "../../pages/Home/backArrow.svg";
import { ReactComponent as ForwardArrow } from "../../pages/Home/forwardArrow.svg";
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
        <div className="screen">
            <NavBar4></NavBar4>
            <div className="bodySection" >
                <ResearchPhosphorus width="65vw" height="82vh" ref={crystalRef}> </ResearchPhosphorus>
            </div>
            <div className="descriptionSection">
                <div className = "headerSection" >
                    <p> {props.description1}</p>
                </div>
                <div className="decs-textSection">
                    <p>{props.description2}</p>
                </div>
            </div>
            <a href="/Faculty2Main/">
                <BackArrow className="backArrow" ref={backRef}></BackArrow>
            </a>
            <a href="/FacultyResearch/">
                <ForwardArrow className="forwardArrow" ref={forwardRef}></ForwardArrow>
            </a>
        </div>
    );
};

const BodyFirstPage = () => {
    return <>{MainBody(content)}</>;
  };
  export default BodyFirstPage;