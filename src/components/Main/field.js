import React from "react";
import "./main.css";

const content = {
  heading: "The\nField",
  description1: "An optimum spectrum is collected in a uniform magnetic field. Though quite good, a magnetic field might not be uniform due to imperfections in the magnet and changes caused by the sample itself.\n\n",
  link: "Shim coils",
  description2: " are small electromagnets that are able to add/subtract a little bit of magnetic field in various directions (the X, Y, and Z planes).  By “shimming”, the magnetic field is made uniform and the spectrum is optimized.",
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
            {props.description1}<a className="link">{props.link}</a>{props.description2}
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