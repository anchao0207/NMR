import React from "react";
import "./interpretingSpectrum.css";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import { ReactComponent as Ethanol } from "../../assets/Ethanol Spectrum.svg";
import { ReactComponent as Shieled } from "../../assets/Shielded.svg";
import { ReactComponent as Deshieled } from "../../assets/Deshielded.svg";
import { ReactComponent as PurpleCH3 } from "../../assets/Purple Ch3.svg";
import { ReactComponent as PinkCH2 } from "../../assets/Pink CH2.svg";

export default function ChemicalShift() {
  const content = {
    heading: "Chemical Shift",
    desc1: "Chemical\nEnvironments\nof Hydrogen",
    desc2: "This",
    link1: "spectrum of Ethanol",
    desc3:
      "illustrates the concept of chemical shift.\n\nThe location of each peak gives information about an atom’s environment, which is measured relative to a standard,",
    desc4: "Si(CH3)4",
    desc5:
      ", and is reported in ppm (which is Hz per MHz). This type of unit standardizes the location of a peak in a spectrum so that the size of the magnet (i.e. 270 MHz versus 400 MHz) does not matter—the location of that peak will be the same on any NMR instrument.\n\nEach nucleus will feel a local magnetic field generated by the electrons surrounding it in either bonds or lone pairs. This localized magnetic field will “shield” the nucleus from the much larger field of the magnet of the NMR instrument.\n\nEvery hydrogen atom will feel the external magnetic field differently as a function of how shielded it is.\n\nHydrogens that feel less of the external magnetic field are considered to be",
    link2: "shielded, which can also be referred to as upfield,",
    desc6:
      "while hydrogens that feel more of the external magnetic field are considered to be",
    link3: "deshielded, which can also be referred to as downfield.",
    desc7:
      "\n\nThe more deshielded (downfield) the atom is, the higher the absorbed frequency and the larger the chemical shift.\n\nThis typical range of chemical shifts in a spectrum is from 0 to 12 ppm. This spectrum of Ethanol doesn’t showcase this entire range, but does show differences in chemical environment.\n\nHydrogens on simple alkane carbons, such as those in",
    link4: "purple (CH3),",
    desc8:
      "will be located between 0 and 2 ppm. Hydrogens on a carbon next to an electronegative element, such as oxygen, will move downfield between 3 and 4.5 ppm, as seen by the",
    link5: "peak in pink (CH2).",
    desc9:
      "The hydrogen on the oxygen, as shown in orange (OH), are dependent upon the sample and are seen between 0 and 5 ppm.\n\nChemists refer to correlation charts that contain tables of typical 1H NMR chemical shifts. With a few essential guideposts, some understanding of polarity and experience with NMR spectra, chemists can make some educated guesses as to relative chemical shifts, even when they don’t have the correlation chart in front of them.",
  };

  const tokenize = (formula) =>
    formula
      .split(/(\d+)/)
      .map((token, idx) => (idx % 2 ? <sub key={idx}>{token}</sub> : token));

  const Formula = ({ children }) => (
    <code className="spectrum-main-link-text">{tokenize(children)}</code>
  );

  const [current, setCurrent] = React.useState();
  const chemShiftRef = React.useRef();
  const ethanolRef = React.useRef();
  const shieldedRef = React.useRef();
  const deshieldedRef = React.useRef();
  const purpleCH3Ref = React.useRef();
  const pinkCH2Ref = React.useRef();


  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        current &&
        !current.contains(event.target) &&
        !(
          event.target.className === "spectrum-main-link-text" ||
          event.target.className ===
            "spectrum-main-link spectrum-main-link-text"
        )
      ) {
        console.log(event.target.className);
        var tl = gsap.timeline();
        tl.to(current, { opacity: 0, duration: 0.25 }).to(
          chemShiftRef.current,
          {
            opacity: 1,
            duration: 0.25,
          }
        );
        setCurrent(undefined);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [current]);

  const onLink1Click = (e) => {
    e.preventDefault();

    var tl = gsap.timeline();
    tl.to(chemShiftRef.current, { opacity: 0 });
    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    }).to(current, { visibility: "hidden" });
    tl.to(ethanolRef.current, {
      visibility: "visible",
      opacity: 1,
      duration: 0.25,
    });
    setCurrent(ethanolRef.current);
  };
  const onLink2Click = (e) => {
    e.preventDefault();

    var tl = gsap.timeline();

    //change this later
    tl.to(chemShiftRef.current, { opacity: 0 });

    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    })
      .to(current, { visibility: "hidden" })
      .to(shieldedRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      });
    setCurrent(shieldedRef.current);
  };
  const onLink3Click = (e) => {
    e.preventDefault();

    var tl = gsap.timeline();
    tl.to(chemShiftRef.current, { opacity: 0 });
    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    }).to(current, { visibility: "hidden" });
    tl.to(deshieldedRef.current, {
      visibility: "visible",
      opacity: 1,
      duration: 0.25,
    });
    setCurrent(deshieldedRef.current);
  };
  const onLink4Click = (e) => {
    e.preventDefault();

    var tl = gsap.timeline();
    tl.to(chemShiftRef.current, { opacity: 0 });
    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    }).to(current, { visibility: "hidden" });
    tl.to(purpleCH3Ref.current, {
      visibility: "visible",
      opacity: 1,
      duration: 0.25,
    });
    setCurrent(purpleCH3Ref.current);
  };
  const onLink5Click = (e) => {
    e.preventDefault();

    var tl = gsap.timeline();
    tl.to(chemShiftRef.current, { opacity: 0 });
    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    }).to(current, { visibility: "hidden" });
    tl.to(pinkCH2Ref.current, {
      visibility: "visible",
      opacity: 1,
      duration: 0.25,
    });
    setCurrent(pinkCH2Ref.current);
  };

  return (
    <>
      <div className="spectrum-main-title" ref={chemShiftRef}>
        {content.heading}
      </div>
      <Ethanol className="spectrum-main-svg" ref={ethanolRef} />
      <Shieled className="spectrum-main-svg" ref={shieldedRef} />
      <Deshieled className="spectrum-main-svg" ref={deshieldedRef} />
      <PurpleCH3 className="spectrum-main-svg" ref={purpleCH3Ref} />
      <PinkCH2 className="spectrum-main-svg" ref={pinkCH2Ref} />
      <div className="spectrum-main-desc">
        <div className="spectrum-main-desc1">{content.desc1}</div>
        <div className="spectrum-main-desc2">
          {content.desc2}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text link"
            onClick={onLink1Click}
          >
            {content.link1}
          </Link>{" "}
          {content.desc3} <Formula>{content.desc4}</Formula>
          {content.desc5}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text link"
            onClick={onLink2Click}
          >
            {content.link2}
          </Link>{" "}
          {content.desc6}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text link"
            onClick={onLink3Click}
          >
            {content.link3}
          </Link>{" "}
          {content.desc7}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text link"
            onClick={onLink4Click}
          >
            <Formula>{content.link4}</Formula>
          </Link>{" "}
          {content.desc8}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text link"
            onClick={onLink5Click}
          >
            <Formula>{content.link5}</Formula>
          </Link>{" "}
          {content.desc9}
        </div>
      </div>
    </>
  );
}
