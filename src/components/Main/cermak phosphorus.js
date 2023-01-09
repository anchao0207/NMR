import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { ReactComponent as ResearchPhosphorus } from "../../components/Main/Ligand Synthesis FeBr2.svg";

const content = {
    description1: "Synthesis of phosphorus derivatives of castor and lesquerella oils",
    description2: "This project is a collaboration with chemists at the U.S. Department of Agriculture, Agricultural Research Service (USDA-ARS), Bio-Oils Research (BOR) Group in Peoria, IL, dealing with the synthesis of phosphorus derivatives of castor and lesquerella oils.\n\nWe are working to convert the primary naturally-occurring fatty acids found in castor oil and lesquerella oil into a variety of phosphorus derivatives, which may have interesting biological activity."
};

const MainBody = (props) => {
    const crystalRef = React.useRef(null);
    return(
        <div className="container">
            <div className="header" >
                <div className="head-text"></div>
                <ResearchPhosphorus width="55vw" height="80vh" ref={crystalRef}> </ResearchPhosphorus>
            </div>
            <div className="description">
                <div className = "subHeading" >
                    <p> {props.description1}</p>
                </div>
                <div className="decs-text">
                    <p>{props.description2}</p>
                </div>
                </div>
            </div>
    );
};

const BodyFirstPage = () => {
    return <>{MainBody(content)}</>;
  };
  export default BodyFirstPage;