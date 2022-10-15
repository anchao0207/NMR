import React from "react";
import "./main.css";

const content = {
  heading1: "The\n",
  heading2: "H Nuclei",
  description1: "Let's consider ",
  suptext: "1",
  description2:"H nuclei. It is an excellent choice for three reasons:",
  description3: "It has a very large magnetic moment,\n\n",
  description4: "Its natural abundance is 99.98%, and\n\n",
  description5: "Hydrogen is fantastically important in many types of chemistry, especially organic chemistry.\n",
  description6: "H nuclei have a resonant frequency with this instrument of 270 MHz."
};

const MainBody = (props) => {
  return (
    <div className="container">
      <div className="header">
        <div className="head-text">{props.heading1}<sup className="head-sup">{props.suptext}</sup>{props.heading2}</div>
      </div>
      <div className="description">
        <div className="decs-text">
            <p>
            {props.description1}<sup>{props.suptext}</sup>{props.description2}
            <ol>
              <li>{props.description3}</li>
              <li>{props.description4}</li>
              <li>{props.description5}</li>
            </ol>
            <sup>{props.suptext}</sup>{props.description6}
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