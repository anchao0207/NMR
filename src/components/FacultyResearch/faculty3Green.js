import React from "react";
import "./research.css";
import { ReactComponent as ResearchGreen } from "../../components/FacultyResearch/Research Catalyst.svg";
import { ReactComponent as Back } from "../../pages/Home/backArrow.svg";
import { ReactComponent as Forward } from "../../pages/Home/forwardArrow.svg";
import NavBar3 from "../NavBar/navbar3";

const content = {
    description1: "Green\n\nChemistry",
    description2: "Dr. Hoyt's research resides primarily in the area of Green Chemistry by synthesis of Inorganic / Organometallic catalysts to form desirable Organic products.\n\nThe Hoyt research group focuses on catalyst design, following a green chemistry approach of incorporating abundant and nontoxic metals (iron & copper) into strategically designed compounds to catalyze the formation of important organic chemical products. In our work, we prepare catalysts that have never before been made, and we collect data (NMR spectroscopy included) to solve the puzzles of their structure, properties, and reactivity."
};

const MainBody = (props) => {
    const greenRef = React.useRef(null);
    const backRef = React.useRef(null);
    const forwardRef = React.useRef(null);
    return(
        <div className="screen">
            <NavBar3></NavBar3>
            <div className="bodySection" >
                <ResearchGreen width="60vw" height="82vh" ref={greenRef}> </ResearchGreen>
            </div>
            <div className="descriptionSection">
                <div className = "headerSection" >
                    <p> {props.description1}</p>
                </div>
                <div className="decs-textSection">
                    <p>{props.description2}</p>
                </div>
            </div>
            <a href="http://localhost:3000/FacultyResearch/">
                <Back className="backArrow" ref={backRef}></Back>
            </a>
            <a href="http://localhost:3000/FacultyResearch/">
                <Forward className="forwardArrow" ref={forwardRef}></Forward>
            </a>
        </div>
    );
};

const BodyFirstPage = () => {
    return <>{
        MainBody(content)}</>;
  };
  export default BodyFirstPage;