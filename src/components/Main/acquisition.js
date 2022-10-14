import React from "react";
import "./main.css";

const content = {
  heading: "The\nAcquisition",
  description1:
    "This is the part of the process that takes the most time.  Here we collect the data.\n\nAfter we tune the spectrometer to a particular nucleus, the sample is ",
  link1:
    "pulsed",
  description2:
    " with radio frequency to excite the nuclei to a high energy state.\n\nOnce the pulse has ended, the nuclei gradually relax back to the lower energy level, releasing an energy signal. This process is repeated a number of times, ranging from minutes to hours, which creates the ",
  link2:
    "Free Induction Decay (FID).",
  description3:
    "\n\nEach different hydrogen in a molecule will have its own FID , based on its environment. These individual FIDs are displayed as a composite overall FID. You could think of this like a stack of colored paper all mixed together. The full stack is the composite FID. Each color represents a different kind of Hydrogen.\n\nThe number of scans depends on the type of experiment, the amount of sample you have, and the type of resolution you need."
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
            {props.description1}<a>{props.link1}</a>{props.description2}<a>{props.link2}</a>{props.description3}
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
