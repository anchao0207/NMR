import React from "react";
import "./research.css";
import NavBar4 from "../NavBar/navbar4";
import { ReactComponent as Back } from "../../pages/Home/backArrow.svg";
import { ReactComponent as Forward } from "../../pages/Home/forwardArrow.svg";
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
        <div className="home">
            <NavBar4></NavBar4>
            <div className="main-body" >
                <ResearchCamphor width="60vw" height="82vh" ref={camphorRef}> </ResearchCamphor>
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