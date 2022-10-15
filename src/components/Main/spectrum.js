import React from "react";
import "./main.css";

const content = {
  heading: "The\nSpectrum",
  description1:
    "A plot of the precession frequencies verses their intensity is called an NMR spectrum.\n\nThe small variations in the precession frequency between the different nuclei in a molecule are called “chemical shift”, and it offers clues about the molecular structure. The range of chemical shift frequencies is typically ver small - so small that the amount of changes is measured in parts per million.\n\nA ",
  link1:
    "H NMR spectrum",
  description2:
    " is usually presented as Intensity vs. parts-per-million (PPM).\n\nWe see the spectrum as a graphical representation of lines that allow a trained scientist to “see” a chemical structure.\n\nOften more than one type of NMR spectrum is needed to identify a chemical compound. There are many different types of NMR experiments."
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
            {props.description1}
            <a className="link"><sup>1</sup>{props.link1}</a>
            {props.description2}
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
