import React from "react";
import "./main.css";

const content = {
  heading: "The Four\nStandard\nNuclei",
  description1:
    "Depending on the nucleus of interest you’ve selected, the magnetic moment varies and thus the resonant frequency varies.\n\nThe four standard NMR-active nuclei are isotopes of hydrogen, carbon, fluorine, and phosphorus.\n\n",
  link1: "H",
  // description2: "   ",
  link2: "C",
  // description3: "   ",
  link3: "F",
  // description4: "   ",
  link4: "P",
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
            {/* <sup>1</sup>
            {props.link1}
            {props.description2}
            <sup>13</sup>
            {props.link2}
            {props.description3}
            <sup>19</sup>
            {props.link3}
            {props.description4}
            <sup>31</sup>
            {props.link4} */}
            <div className="flexbox">
              <div>
                <sup>1</sup>
                {props.link1}
              </div>
              <div>
                <sup>13</sup>
                {props.link2}
              </div>
              <div>
                <sup>19</sup>
                {props.link3}
              </div>
              <div>
                <sup>31</sup>
                {props.link4}
              </div>
            </div>
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
