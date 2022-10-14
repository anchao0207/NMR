import React from "react";
import "./main.css";

const content = {
  heading: "The\nPulse",
  description1:
    "The instrument is tuned to the specific frequency of the nuclei of interest (most often 1H or 13C, but other atoms can be observed as well).\n\nThe sample will  be hit with ",
  link1:
    "electromagnetic pulses",
  description2:
    " in the radio frequency (RF) range.\n\nThe nuclei will absorb energy from the pulse and go from a lower energy state to a higher energy state. Once the pulse has ended, the nuclei relax back to the lower energy level, releasing an energy signal.",
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
