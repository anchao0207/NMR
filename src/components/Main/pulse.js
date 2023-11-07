import React from "react";
import axios from "axios";
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

const onHClick = async (e) => {
  try {
    await axios({
      method: "POST",
      url: "http://localhost:8080/off",
    });
    await axios({
      method: "POST",
      url: "http://localhost:8080/pulseH",
    });
  } catch (err) {
    console.log(err);
  }

  e.preventDefault();
};
const onCClick = async (e) => {
  try {
    await axios({
      method: "POST",
      url: "http://localhost:8080/off",
    });
    await axios({
      method: "POST",
      url: "http://localhost:8080/pulseC",
    });
  } catch (err) {
    console.log(err);
  }
  e.preventDefault();
};
const onFClick = async (e) => {
  try {
    await axios({
      method: "POST",
      url: "http://localhost:8080/off",
    });
    await axios({
      method: "POST",
      url: "http://localhost:8080/pulseF",
    });
  } catch (err) {
    console.log(err);
  }
  e.preventDefault();
};
const onPClick = async (e) => {
  try {
    await axios({
      method: "POST",
      url: "http://localhost:8080/off",
    });
    await axios({
      method: "POST",
      url: "http://localhost:8080/pulseP",
    });
  } catch (err) {
    console.log(err);
  }
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
              <a href="/#" className="link" onClick={onHClick}>
                <sup>1</sup>
                {props.link1}
              </a>
              <a href="/#" className="link" onClick={onCClick}>
                <sup>13</sup>
                {props.link2}
              </a>
              <a href="/#" className="link" onClick={onFClick}>
                <sup>19</sup>
                {props.link3}
              </a>
              <a href="/#" className="link" onClick={onPClick}>
                <sup>31</sup>
                {props.link4}
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
