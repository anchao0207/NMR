import React from "react";
import "./courseUsage.css";
import { ReactComponent as ThreeA1 } from "../../components/CourseUsage/3a1.svg";
const content = {
  heading: "Carbon-13 NMR\nSpectroscopy",
  description:
    "C NMR spectroscopy is used to distinguish the number of types of carbon atoms among a set of isomer compounds with the same molecular formula but different ",
};

const MainBody = (props) => {
  return (
    <div className="container">
      <div className="header">
        <ThreeA1 height={"83.4vh"}></ThreeA1>
      </div>
      <div className="description">
        <div className="heading-text">{props.heading}</div>
        <div className="decscription-text"><p><sub>13</sub>{props.description}</p></div>
      </div>
    </div>
  );
};

const BodyFirstPage = () => {
  return <>{MainBody(content)}</>;
};
export default BodyFirstPage;
