import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

import { ReactComponent as Methanol } from "../../components/Main/Methanol.svg";
import { ReactComponent as Methanol1H } from "../../components/Main/Methanol 1H.svg";
import { ReactComponent as Methanol3H } from "../../components/Main/Methanol 3H.svg";

const content = {
  heading: "The\nAcquisition",
  description1:
    "This part of the process can take some time, depending on what information we need and what kind of sample we have.  Here we collect the NMR data.\n\nAfter we tune the spectrometer to a particular nucleus and shim the magnetic field, the sample is pulsed with radio waves at the resonant frequency to initiate precession.\n\nAll these little magnets precessing together add up to create a bigger oscillating magnetic field. It is measured through magnetic induction (exactly like how the antenna of a radio picks up radio signals).\n\nOnce the pulse has ended, the nuclei initially precess together and this yields an NMR signal that is recorded in a computer.\n\nVery shortly after the pulse, the nuclei stop precessing together (stop being in phase). The nuclei get out of sync for two main reasons:\n\n",
    description2:
    "1. The nuclei within a molecule\nare in slightly different\nmagnetic environments and so\nprecess at slightly different\nfrequencies.\nFor example, consider the two\ndifferent hydrogen\nenvironments in ",
  link1:
    "methanol:",
  link2:
    "one is attached to oxygen\n",
  description3:
    "and\n",
  link3:
    "the others are attached to carbon.\n\n",
  description4:
    "2. The nuclei gradually “relax”\nback to equilibrium.\n\n",
  description5:
    "As the nuclei stop precessing in sync, the strength of the magnetic induction decreases.  One can observe this magnetic induction decay over time.  This is called the Free Induction Decay (FID).\n\nIf an FID signal is weak, the experiment can be repeated and added together in order to improve the signal to noise. The number of scans needed depends on the type of experiment, the amount of sample you have, and the problem you're trying to solve.",
};

const MainBody = (props) => {
  const mainSpace = React.useRef(null)
  const methanolRef = React.useRef(null)
  const methanol1HRef = React.useRef(null)
  const methanol3HRef = React.useRef(null)

  const onMethanolClick = () =>{
    mainSpace.current.style.visibility = 'hidden';
    methanolRef.current.style.visibility = 'visible';
    methanol1HRef.current.style.visibility = 'hidden';
    methanol3HRef.current.style.visibility = 'hidden';
  }
  const onOxygenClick = () =>{
    mainSpace.current.style.visibility = 'hidden';
    methanolRef.current.style.visibility = 'hidden';
    methanol1HRef.current.style.visibility = 'visible';
    methanol3HRef.current.style.visibility = 'hidden';
  }
  const onCarbonClick = () =>{
    mainSpace.current.style.visibility = 'hidden';
    methanolRef.current.style.visibility = 'hidden';
    methanol1HRef.current.style.visibility = 'hidden';
    methanol3HRef.current.style.visibility = 'visible';
  }
  return (
    <div className="container">
      <div className="header" >
          <Methanol width= "60vw" height="70vh" className="pop-up" ref={methanolRef}></Methanol>
          <Methanol1H width= "60vw" height="70vh" className="pop-up" ref={methanol1HRef}></Methanol1H>
          <Methanol3H width= "60vw" height="70vh" className="pop-up" ref={methanol3HRef}></Methanol3H>
          <div className="head-text" ref={mainSpace}>{props.heading}</div>
          

      </div>
      <div className="description">
        <div className="decs-text">
            <p>{props.description1}</p>
            <div className="padding">
              <p>
              {props.description2}
              <Link className="link" onClick={onMethanolClick}>{props.link1}</Link>
              </p>
            </div>
            <div className="center">
              <p>
              <Link className="link" onClick={onOxygenClick}>{props.link2}</Link>
              {props.description3}
              <Link className="link" onClick={onCarbonClick}>{props.link3}</Link>
              </p>
            </div>
            <div className="padding">
              <p>{props.description4}</p>
            </div>
            <p>{props.description5}</p>
        </div>
      </div>
    </div>
  );
};

const BodyFirstPage = () => {
  return <>{MainBody(content)}</>;
};
export default BodyFirstPage;
