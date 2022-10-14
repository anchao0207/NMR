import React from "react";
import "./main.css";

const content = {
  heading: "The\nBigger\nPicture",
  description: "Where MRI generates an image that physicians can use to make a medical diagnosis, NMR generates a spectrum that allows chemist determine the structure of a molecule.\n\nA chemist can ...",
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