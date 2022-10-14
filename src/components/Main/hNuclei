import React from "react";
import "./main.css";

const content = {
  heading: "The\n1H Nuclei",
  description1: "Let's consider 1H nuclei. These nuclei have a resonant frequency with this instrument of 270 MHz.\n\nWhen we tune the instrument to the 1H nucleus, it sends the ",
  link: "1H radio frequency pulse ",
  description2: "into the instrument.\n\nThe 1H nuclei of the sample will absorb energy from the 1H pulse and go from a lower energy state to a higher energy state.",
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
            {props.description1}<a>{props.link}</a>{props.description2}
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