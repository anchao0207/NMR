import React from "react";
import "./research.css";
import NavBar5 from "../NavBar/navbar5";
import { ReactComponent as Back } from "../../pages/Home/backArrow.svg";
import { ReactComponent as Forward } from "../../pages/Home/forwardArrow.svg";
import { ReactComponent as Soil } from "../FacultyResearch/soilImage.svg";

const content = {
    header: "Soil Phosphorus",
    description1: "Professor Adelsberger's research focuses on the characterization of soil phosphorus in prairie soils in order to determine the primary controls on phosphorus availability.\n\nAvailable forms may be affected by processes such as prairie burns, erosion, and animal manuring. Here, we see a student taking a core sample.\n\nThis graph shows the phosphorus results from samples captured from different prairies at Green Oaks. As you can see, all levels of phosphorus are the same for each prairie."
};

const MainBody = (props) => {
    const soilRef = React.useRef(null);
    const backRef = React.useRef(null);
    const forwardRef = React.useRef(null);
    return(
        <div className="home">
            <NavBar5></NavBar5>
            <div className="main-body" >
                <Soil width="60vw" height="82vh" ref={soilRef}> </Soil>
            </div>
            <div className="description">
                <div className = "subHeading" >
                    <p> {props.header}</p>
                </div>
                <div className="decs-text">
                    <p>{props.description1}</p>
                </div>
            </div>
            
            <a href="http://localhost:3000/FacultyResearch/">
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