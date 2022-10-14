import React from "react";
import "./main.css";

const content = {
  heading1: "The\n",
  heading2: "H Nuclei",
  description1: "Let's consider ",
  suptext: "1",
  description2:"H nuclei. It is an excellent choice for three reasons:\n\n1. It has a very large magnetic moment,\n\n2. Its natural abundance is 99.98%, and\n\n3. Hydrogen is fantastically important in many types of chemistry, especially organic chemistry.",
};

const MainBody = (props) => {
  return (
    <div className="container">
      <div className="header">
        <div className="head-text">{props.heading1}<sup>{props.suptext}</sup>{props.heading2}</div>
      </div>
      <div className="description">
        <div className="decs-text">
            <p>
            {props.description1}<sup>{props.suptext}</sup>{props.description2}
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