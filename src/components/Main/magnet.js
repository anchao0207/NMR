import React from "react";
import "./main.css";
import axios from "axios";

const content = {
  heading: "The\nMagnet",
  description1: "Just like an MRI, the heart of the NMR spectrometer is a ",
  link1: "superconducting magnet.",
  description2:
    "\n\nAs long as it is kept sufficiently cold, the electricity flowing in the superconducting wire (and the magnetic field it creates) will continue forever. No batteries or external power required!\n\nThe magnet field strength of this instrument is 6.3 tesla. That’s about 200,000 times more powerful than the magnetic field of the earth!",
};

const onMagnetClick = async (e) => {
  try {
    await axios({
      method: "POST",
      url: "http://localhost:8080/off",
    });
    await axios({
      method: "POST",
      url: "http://localhost:8080/magnet",
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
          <p>
            {props.description1}
            <a href="/#" className="link" onClick={onMagnetClick}>
              {props.link1}
            </a>
            {props.description2}
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
