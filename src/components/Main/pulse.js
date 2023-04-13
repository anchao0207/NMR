import React from "react";
import axios from "axios"
import "./main.css";

const content = {
  heading: "The\nPulse",
  description1:
    "The instrument is tuned to the specific resonant or precession frequency of the nuclei of interest.\n\nThis frequency is a function of the strength of the magnetic field and the size of the magnetic moment of the nuclei of interest.\n\nThis means that we need to tune the instrument to different resonant frequencies within the radio frequency (RF) range.\n\nThese are the resonant frequencies for the four standard nuclei:\n",
  link1: "H {270 MHz}\n\n",
  link2: "C {68 MHz}\n\n",
  link3: "F {254 MHz}\n\n",
  link4: "P {109 MHz}",
};

const onHClick = (e) => {
  axios({
    method: "POST",
    url: "http://localhost:8080/pulseH",
  });
  e.preventDefault();
};
const onCClick = (e) => {
  axios({
    method: "POST",
    url: "http://localhost:8080/pulseC",
  });
  e.preventDefault();
};
const onFClick = (e) => {
  axios({
    method: "POST",
    url: "http://localhost:8080/pulseF",
  });
  e.preventDefault();
};
const onPClick = (e) => {
  axios({
    method: "POST",
    url: "http://localhost:8080/pulseP",
  });
  e.preventDefault();
};


const MainBody = (props) => {
  return (
    <div className="container">
      <div className="header">
        <div className="head-text">{props.heading}</div>
      </div>
      <div className="description">
        <div className="decs-text">
          <p>{props.description1}</p>
          <div className="center">
            <p>
              <a className="link" onClick={onHClick}>
                <sup>1</sup>
                {props.link1}
              </a>
              <a className="link" onClick={onCClick}>
                <sup>13</sup>
                {props.link2}
              </a>
              <a className="link" onClick={onFClick}>
                <sup>19</sup>
                {props.link3}
              </a>
              <a className="link" onClick={onPClick}>
                <sup>31</sup>
                {props.link2}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BodyFirstPage = () => {
  return <>{MainBody(content)}</>;
};
export default BodyFirstPage;
