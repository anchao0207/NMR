import React from "react";
import "./main.css";

const content = {
  heading: "The\nNuclei",
  description: "The nuclei will absorb energy from the pulse and go from a lower energy state to a higher energy state. Once the pulse has ended, the nuclei relax back to the lower energy level, releasing an energy signal.",
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