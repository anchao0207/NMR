import React from "react";
import "./interpretingSpectrum.css";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import { ReactComponent as Ethanol } from "../../assets/Ethanol Spectrum.svg";
import { ReactComponent as EthanolUnder } from "../../assets/Ethanol area under peak.svg";
import { ReactComponent as SpectrumDiethyl } from "../../assets/Spectrum of Diethyl ether.svg";
import { ReactComponent as MolDiethyl } from "../../assets/Molecular Structure of Diethyle ether.svg";

export default function ChemicalShift() {
  const content = {
    heading: "Integration",
    desc1: "How Many of\nEach Type\nof Hydrogen",
    desc2: "Integration gives information about how many hydrogens are in a molecule (not in an absolute number, but in relative proportion to each other).\n\nIn",
    link1: "this spectrum of Ethanol",
    desc3: ", the three sets of peaks are not equal in size. The",
   link2: "area under each peak is different",
    desc4:
      "and is representative of what proportion of each particular type of hydrogen is present in the molecule.\n\nIntegration is automatically calculated by the NMR software program and expressed as a ratio between peaks in a spectrum.\n\nIn this spectrum of Ethanol, the three peaks represent the three different kinds of hydrogen in the molecule with three distinct chemical shifts.\n\nThe area under each peak is relative in a proportion of 2:1:3. This could mean that the ratio is 2 H for one peak, 1 H for the second peak, and 3 H for the third peak, or  it could be a proportion of 4:2:6, meaning a ratio of 4 H for one peak, 2 H for the second peak, and 6 H for the third peak.\n\nSymmetry can be observed through integration as well, as seen in this",
    link3: "spectrum of Diethyl ether",
    desc5: ". Since this molecule is symmetrical, its area is actually a 4:6 ratio, as seen in its",
    link4: "molecular structure",
    desc6: ", but it could also be correctly reported as a 2:3 ratio, since these are both the relative proportions. Remember: it’s not absolute, but relative.\n\nhis is where information about the chemical structure of the compound (or at least knowing the formula) becomes extremely handy; but even without knowing the chemical formula, integration is a fundamental piece of information provided in a ",
    desc7: "H NMR spectrum."
  };

  const [current, setCurrent] = React.useState();
  const integrationRef = React.useRef();
  const ethanolRef = React.useRef();
  const ethanolUnderRef = React.useRef();
  const spectrumDiethylRef = React.useRef();
  const molDiethylRef = React.useRef();

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
          integrationRef.current,
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
    tl.to(integrationRef.current, { opacity: 0 });
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
    tl.to(integrationRef.current, { opacity: 0 });
    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    }).to(current, { visibility: "hidden" });
    tl.to(ethanolUnderRef.current, {
      visibility: "visible",
      opacity: 1,
      duration: 0.25,
    });
    setCurrent(ethanolUnderRef.current);
  };
  const onLink3Click = (e) => {
    e.preventDefault();

    var tl = gsap.timeline();
    tl.to(integrationRef.current, { opacity: 0 });
    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    }).to(current, { visibility: "hidden" });
    tl.to(spectrumDiethylRef.current, {
      visibility: "visible",
      opacity: 1,
      duration: 0.25,
    });
    setCurrent(spectrumDiethylRef.current);
  };
  const onLink4Click = (e) => {
    e.preventDefault();

    var tl = gsap.timeline();
    tl.to(integrationRef.current, { opacity: 0 });
    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    }).to(current, { visibility: "hidden" });
    tl.to(molDiethylRef.current, {
      visibility: "visible",
      opacity: 1,
      duration: 0.25,
    });
    setCurrent(molDiethylRef.current);
  };

  return (
    <>
      <div className="spectrum-main-title" ref={integrationRef}>
        {content.heading}
      </div>
      <Ethanol className="spectrum-main-svg" ref={ethanolRef} />
      <EthanolUnder className="spectrum-main-svg" ref={ethanolUnderRef} />
      <SpectrumDiethyl className="spectrum-main-svg" ref={spectrumDiethylRef} />
      <MolDiethyl className="spectrum-main-svg" ref={molDiethylRef} />

      <div className="spectrum-main-desc">
        <div className="spectrum-main-desc1">{content.desc1}</div>
        <div className="spectrum-main-desc2">
          {content.desc2}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text link"
            onClick={onLink1Click}
          >
            {content.link1}
          </Link>
          {content.desc3}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text link"
            onClick={onLink2Click}
          >
            {content.link2}
          </Link>{" "}
          {content.desc4}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text link"
            onClick={onLink3Click}
          >
            {content.link3}
          </Link>
          {content.desc5}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text link"
            onClick={onLink4Click}
          >
            {content.link4}
          </Link>
          {content.desc6}
          <sup>1</sup>
          {content.desc7}
        </div>
      </div>
    </>
  );
}
