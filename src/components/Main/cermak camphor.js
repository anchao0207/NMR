import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { ReactComponent as ResearchCamphor } from "../../components/Main/Camphor People.svg";

const content = {
    description1: "Assymetric synthesis of camphor-based sulfonyl imines and ketones",
    description2: "This project focuses on the asymmetric synthesis of camphor-based sulfonyl imines and ketones.\n\nhese molecules can be converted to oxaziridines, an asymmetric, electrophilic oxygen source, or to sulfonylamines, which have potential use as a chiral auxiliary—a molecule which can transfer chirality to an achiral molecule.\n\nWe are working to convert the primary naturally-occurring fatty acids found in castor oil and lesquerella oil into a variety of phosphorus derivatives, which may have interesting biological activity."
};

const MainBody = (props) => {
    const camphorRef = React.useRef(null);
    return(
        <div className="container">
            <div className="header" >
                <div className="head-text"></div>
                <ResearchCamphor width="55vw" height="80vh" ref={camphorRef}> </ResearchCamphor>
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