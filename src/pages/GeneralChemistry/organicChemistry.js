import React from "react";
import "./generalChemistry.css";
import ThreeA1 from "../../components/CourseUsage/threeA1";
import NavBar from "../../components/NavBar/navbar2";
import { Link } from "react-router-dom";
import { ReactComponent as Back } from "../../pages/Home/backArrow.svg";
import { ReactComponent as Forward } from "../../pages/Home/forwardArrow.svg";

export default function OrganicChemistry() {
  return (
    <>
      <div className="home">
        <NavBar></NavBar>
        <div className="title">
          <span>General Chemistry</span>
        </div>
        <div className="main-body">
          <ThreeA1></ThreeA1>
          <Link to="/CourseUsage/">
            <Back className="back3a1" />
          </Link>
          <Link to="/CourseUsage/">
            <Forward className="forward3a1" />
          </Link>
        </div>
      </div>
    </>
  );
}
