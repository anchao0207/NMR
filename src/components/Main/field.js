import React from "react";
import "./main.css";

const content = {
  heading: "The\nField",
  description1: "When a sample is lowered into the magnet, the magnet field is distorted by the sample and several other factors.\n\nA spectrum from a distorted magnetic field will likewise be distorted.\n\nShimming the magnetic field will bring back to its correct shape. ",
  link: "The shim coils ",
  description2: "add a little bit of magnetic field where it's needed to make the magnetic field around the sample uniform. The instrument analyzes the sample while simultaneously adjusting the shim coils to acheive the uniform magnetic field.",
};

const MainBody = (props) => {
  return (
    <div className="container">
      <div className="header">
        <div className="head-text">{props.heading}</div>
      </div>
      <div className="description">
        <div className="decs-text">
            <p>
            {props.description1}<a className="link">{props.link}</a>{props.description2}
            </p>
        </div>
      </div>
    </div>
  );
};

const BodyFirstPage = () => {
  return <>{MainBody(content)}</>;
};
export default BodyFirstPage;