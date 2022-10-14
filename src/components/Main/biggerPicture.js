import React from "react";
import "./main.css";

const content = {
  heading: "The\nBigger\nPicture",
  description: "NMR spectroscopy is a powerful tool that can identify chemical compounds and measure many types of chemical reactions. It works best with small amounts (1 to 100 milligrams) of a pure, or mostly pure, compound.\n\nIt can be used to investigate mixtures in the right situations or combined with other methods (like High Pressure Liquid Chromatography) to expand its utility.\n\nNuclear Magnetic Resonance spectroscopy is a key technique in the discovery of new medicines and industrial processes.",
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