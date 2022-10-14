import React from "react";
import "./main.css";

const content = {
  heading: "The\nSpectrum",
  description1:
    "In 1H NMR, the spectrum shows a plot of the frequency of the hydrogen signal vs. ",
  link1:
    "the (______? magnet? operating?)",
  description2:
    " frequency of the spectrometer.\n\nAn experienced chemist can quickly take a look at the spectrum to identify  types of hydrogen present in a sample and how they are configured within a molecule.\n\nBecause NMR generates spectra that plot signal frequency vs. individual instrument frequency, it allows scientists using different NMR spectrometers ",
  link2:
    "(with different magnet strengths?)",
  description3:
    " to collect comparable data."
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
            {props.description1}<a className="red">{props.link1}</a>{props.description2}<a className="red">{props.link2}</a>{props.description3}
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
