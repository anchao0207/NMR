import React from "react";
import "./main.css";

const content = {
  heading: "The\nTransformation",
  description: "Where the acquisition could have taken anywhere from 1.5 minutes up to one hour or more, the transformation takes only seconds.\n\nThe FID acquired in acquisition holds a lot of data. But a chemist needs the composite FID broken down into a decipherable format that allows us to understand the chemical structure.\n\nThe NMR spectrometer converts the composite FID to a spectrum via a Fourier transformation that mathematically converts each individual FID (resulting from each hydrogen's resonance frequency) in a composite into a signal, which we see as peaks in an NMR spectrum.",
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
            {props.description}
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