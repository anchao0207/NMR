import React from "react";
import "./main.css";

const content = {
  heading: "The\nTechnology",
  description:
    "Have you ever had an MRI?\nNMR spectroscopy uses the same technology:\nA magnetic fields, radio waves, and particular nuclei to study environments at the atomic/molecular level\nMRI specifically looks at hydrogen nuclei in water moelcules in various bodily tissues to produce an image that doctor use to understand what's happening in the body.\nNMR spectroscopy uses the same technology that chemists use to produce an NMR spectrum to understand chemical structure.",
};

const MainBody = (props) => {
  return (
    <div className="container">
      <div className="header">
        <div className="head-text">{props.heading}</div>
      </div>
      <div className="description">
        <div className="decs-text">{props.description}</div>
      </div>
    </div>
  );
};

const BodyFirstPage = () => {
  return <>{MainBody(content)}</>;
};
export default BodyFirstPage;
