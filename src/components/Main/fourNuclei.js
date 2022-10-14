import React from "react";
import "./main.css";

const content = {
  heading: "The Four\nStandard\nNuclei",
  description1:
    "Depending on the nucleus of interest you’ve selected, the resonant frequency varies. This difference in radio pulse frequency can be seen in the four standard NMR-active nuclei:\n\n            ",
  link1:
    "1H",
  description2:
    ",      ",
  link2:
    "13C",
  description3:
    ",      ",
  link3:
    "19F",
  description4:
    ",      ",
  link4:
    "31P",
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
            {props.description1}<a>{props.link1}</a>{props.description2}<a>{props.link2}</a>{props.description3}<a>{props.link3}</a>{props.description4}<a>{props.link4}</a>
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
