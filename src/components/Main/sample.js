import React from "react";
import "./main.css";

const content = {
  heading: "The\nSample",
  description1:
    "If you’ve ever had an MRI, you were the sample.\n\nWith NMR, a sample is made of your compound of interest and a deuterated NMR solvent. Then, ",
  link1:
    "the sample is lowered",
  description2:
    " into the hollow center of the magnet where the magnetic field is strongest and most uniform.",
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
            {props.description1}<a className="link">{props.link1}</a>{props.description2}
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
