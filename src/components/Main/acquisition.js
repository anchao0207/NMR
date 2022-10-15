import React from "react";
import "./main.css";

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
    "As the nuclei stop precessing in sync, the strength of the magnetic induction decreases.  One can observe this magnetic induction decay over time.  This is called the ",
  link4:
    "Free Induction Decay (FID).",
  description6:
    "\n\nIf an FID signal is weak, the experiment can be repeated and added together in order to improve the signal to noise. The number of scans needed depends on the type of experiment, the amount of sample you have, and the problem you’re trying to solve."
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
            </p>
            <div className="padding">
              <p>
              {props.description2}
              <a className="link">{props.link1}</a>
              </p>
            </div>
            <div className="center">
              <p>
              <a className="link">{props.link2}</a>
              {props.description3}
              <a className="link">{props.link3}</a>
              </p>
            </div>
            <div className="padding">
              <p>
              {props.description4}
              </p>
            </div>
            <p>
            {props.description5}
            <a className="link">{props.link4}</a>
            {props.description6}
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
