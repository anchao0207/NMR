import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { ReactComponent as Intensity } from "../../components/Main/Intensity.svg";
import { ReactComponent as PPM } from "../../components/Main/PPM.svg";
import { ReactComponent as Methanol } from "../../components/Main/Methanol.svg";
import { ReactComponent as Methanol1H } from "../../components/Main/Methanol 1H.svg";
import { ReactComponent as Methanol3H } from "../../components/Main/Methanol 3H.svg";
import { ReactComponent as Methanol1HSpectrum } from "../../components/Main/Methanol 1H Spectrum.svg";
import { ReactComponent as TwoPeaks } from "../../components/Main/Two Peaks.svg";
import { ReactComponent as ShorterPeak } from "../../components/Main/Shorter Peak.svg";
import { ReactComponent as TallerPeak } from "../../components/Main/Taller Peak.svg";

const content = {
  heading: "The\nSpectrum",
  description1:
    "A plot of the precession frequencies versus their intensity is called an NMR spectrum.\n\nThe small variations in the precession frequency between the different nuclei in a molecule are called “chemical shift”, and it offers clues about the molecular structure. The range of chemical shift frequencies is typically very small - so small that the amount of change is measured in parts per million.\n\nA spectrum is usually presented as ",
  link1:
    "Intensity",
  link2:
    "parts-per-million (PPM)",
  description2:
    ".\n\nWe see the spectrum as a graphical representation of lines that allow a trained scientist to “see” a chemical structure.\n\nOften, more than one type of NMR spectrum  is needed to identify a chemical compound. There are many different types of NMR experiments.\n\nLet’s assume that we have performed enough experiments and gathered enough data to know that we are working with a sample of Methanol.\n\nIf we recall the molecular structure of ",
  link3:
    "Methanol",
  description3:
    ", we know that it’s composed of ",
  link4: 
    "a single hydrogen",
  description4:
    " attached to oxygen and ",
  link5: 
    "three hydrogens",
  description5:
    " attached to a carbon.\n\nIn this ",
  link6: 
    "H NMR spectrum of Methanol",
  link7:
    "two peaks",
  description6:
    " that further validate the different chemical environments of hydrogen within the sample.\n\nThe ",
  link8:
    "shorter peak",
  description7:
    " at 4.8 ppm is the single hydrogen attached to the oxygen. The ",
  link9:
    "taller peak",
  description8:
    " at 3.6 ppm are the three hydrogens attached to the carbon."
};

const MainBody = (props) => {
  const headingRef = React.useRef(null);
  const intensityRef = React.useRef(null);
  const ppmRef = React.useRef(null);
  const methanolRef = React.useRef(null);
  const methanol1HRef = React.useRef(null);
  const methanol3HRef = React.useRef(null);
  const spectrumRef = React.useRef(null);
  const twoRef = React.useRef(null);
  const shotterRef = React.useRef(null);
  const tallerRef = React.useRef(null);

  const intensityClick = () => {
    headingRef.current.style.visibility = 'hidden';
    intensityRef.current.style.visibility = 'visible';
    ppmRef.current.style.visibility = 'hidden';
    methanolRef.current.style.visibility = 'hidden';
    methanol1HRef.current.style.visibility = 'hidden';
    methanol3HRef.current.style.visibility = 'hidden';
    spectrumRef.current.style.visibility = 'hidden';
    twoRef.current.style.visibility = 'hidden';
    shotterRef.current.style.visibility = 'hidden';
    tallerRef.current.style.visibility = 'hidden';
  }

  return (
    <div className="container">
      <div className="header">
        <div className="head-text" ref={headingRef}>{props.heading}</div>
        <Intensity width="50vw" height="75vh" className="pop-up" ref={intensityRef}></Intensity>
        <PPM width="50vw" height="75vh" className="pop-up" ref={ppmRef}></PPM>
        <Methanol className="pop-up" ref={methanolRef}></Methanol>
        <Methanol1H className="pop-up" ref={methanol1HRef}></Methanol1H>
        <Methanol3H className="pop-up" ref={methanol3HRef}></Methanol3H>
        <Methanol1HSpectrum width="50vw" height="75vh" className="pop-up" ref={spectrumRef}></Methanol1HSpectrum>
        <TwoPeaks width="50vw" height="75vh" className="pop-up" ref={twoRef}></TwoPeaks>
        <ShorterPeak width="50vw" height="75vh" className="pop-up" ref={shotterRef}></ShorterPeak>
        <TallerPeak width="50vw" height="75vh" className="pop-up" ref={tallerRef}></TallerPeak>
      </div>
      <div className="description">
        <div className="decs-text">
            <p>
            {props.description1}
            <a className="link" onClick={intensityClick}>{props.link1}</a> vs. <Link className="link">{props.link2}</Link>
            {props.description2}
            <Link className="link">{props.link3}</Link>
            {props.description3}
            <Link className="link">{props.link4}</Link>
            {props.description4}
            <Link className="link">{props.link5}</Link>
            {props.description5}
            <a className="link"><sup>1</sup>{props.link6}</a> we see <a className="link">{props.link7}</a>
            {props.description6}
            <a className="link">{props.link8}</a>
            {props.description7}
            <a className="link">{props.link9}</a>
            {props.description8}
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
