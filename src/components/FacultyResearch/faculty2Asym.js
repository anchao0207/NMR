import React from "react";
import "./research.css";
import NavBar4 from "../NavBar/navbar4";
import { ReactComponent as BackArrow } from "../../pages/Home/backArrow.svg";
import { ReactComponent as ForwardArrow } from "../../pages/Home/forwardArrow.svg";
import { ReactComponent as ResearchCamphor } from "../FacultyResearch/Camphor People.svg";

const content = {
    description1: "Assymetric synthesis of camphor-based sulfonyl imines and ketones",
    description2: "This project focuses on the asymmetric synthesis of camphor-based sulfonyl imines and ketones.\n\nhese molecules can be converted to oxaziridines, an asymmetric, electrophilic oxygen source, or to sulfonylamines, which have potential use as a chiral auxiliary—a molecule which can transfer chirality to an achiral molecule.\n\nWe are working to convert the primary naturally-occurring fatty acids found in castor oil and lesquerella oil into a variety of phosphorus derivatives, which may have interesting biological activity."
};

const MainBody = (props) => {
    const camphorRef = React.useRef(null);
    const backRef = React.useRef(null);
    const forwardRef = React.useRef(null);
    return(
        <div className="screen">
            <NavBar4></NavBar4>
            <div className="bodySection" >
                <ResearchCamphor width="60vw" height="82vh" ref={camphorRef}> </ResearchCamphor>
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