import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { ReactComponent as ResearchGreen } from "../../components/Main/Hoyt Research Catalyst.svg";

const content = {
    description1: "Green Chemistry",
    description2: "Dr. Hoyt's research resides primarily in the area of Green Chemistry by synthesis of Inorganic/Organometallic catalysts to form desirable Organic products."
};

const MainBody = (props) => {
    const greenRef = React.useRef(null);
    return(
        <div className="container">
            <div className="header" >
                <div className="head-text"></div>
                <ResearchGreen width="55vw" height="80vh" ref={greenRef}> </ResearchGreen>
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