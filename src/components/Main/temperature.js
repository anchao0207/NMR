import React from "react";
import "./main.css";
import axios from "axios";

const content = {
  heading: "The\nTemperature",
  description1:
    "In order for our magnet to be superconducting it needs to be at a very cold temperature.\n\nThe superconducting magnet is cooled by ",
  link1: "liquid helium,",
  description2:
    " which provides this low temperature (4K / -452℉/ -269℃).\n\nThe liquid helium will evaporate over time. To slow down this evaporation, the (expensive) liquid helium is kept cold by a separate layer of (cheap) ",
  link2: "liquid nitrogen",
  description3:
    " (77K, -196℃ / -320℉).\n\nThe outside layer of the can is insulated by a vacuum and with ",
  link3: "Mylar,",
  description4:
    " to help keep the magnet cold.\n\nBasically, the entire metal can is like a Yeti - an excellent thermos!",
};

const onHeliClick = async (e) => {
  try {
    await axios({
      method: "POST",
      url: "http://localhost:8080/off",
    });
    await axios({
      method: "POST",
      url: "http://localhost:8080/temperature-heli",
    });
  } catch (err) {
    console.log(err);
  }
  e.preventDefault();
};
const onNitroClick = async (e) => {
  try {
    await axios({
      method: "POST",
      url: "http://localhost:8080/off",
    });
    await axios({
      method: "POST",
      url: "http://localhost:8080/temperature-nitro",
    });
  } catch (err) {
    console.log(err);
  }
  e.preventDefault();
};
const onMylarClick = async (e) => {
  try {
    await axios({
      method: "POST",
      url: "http://localhost:8080/off",
    });
    await axios({
      method: "POST",
      url: "http://localhost:8080/temperature-mylar",
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
            <a href="/#" className="link" onClick={onHeliClick}>
              {props.link1}
            </a>
            {props.description2}
            <a href="/#" className="link" onClick={onNitroClick}>
              {props.link2}
            </a>
            {props.description3}
            <a href="/#" className="link" onClick={onMylarClick}>
              {props.link3}
            </a>
            {props.description4}
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
