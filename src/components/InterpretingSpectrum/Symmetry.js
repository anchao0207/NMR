import React from "react";
import "./interpretingSpectrum.css";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ReactComponent as Ethanol } from "../../assets/Ethanol Spectrum.svg";
import { ReactComponent as EthanolCH2 } from "../../assets/Ethanol - CH2 peak.svg";
import { ReactComponent as EthanolOH } from "../../assets/Ethanol - OH peak.svg";
import { ReactComponent as EthanolCH3 } from "../../assets/Ethanol - CH3 peak.svg";
import { ReactComponent as EthanolMol } from "../..//assets/Ethanol - molecular strucutre.svg";
import { ReactComponent as CH2Mol } from "../..//assets/CH2 Molecular Structure.svg";
import { ReactComponent as CH3Mol } from "../..//assets/CH3 Molecular Structure.svg";
import { ReactComponent as CHDiff } from "../..//assets/2HDiff.svg";
import { ReactComponent as OHDiff } from "../..//assets/3HDiff.svg";
import { ReactComponent as AllDiff } from "../..//assets/All Different.svg";
import { ReactComponent as Diethyl } from "../..//assets/Diethyl Ether.svg";
import { ReactComponent as DiethylCH2 } from "../..//assets/Diethyl Ether CH2.svg";
import { ReactComponent as DiethylCH3 } from "../..//assets/Diethyl Ether CH3.svg";

export default function Symmetry() {
  const content = {
    heading: "Symmetry",
    desc1: "Number of\nPeaks",
    desc2:
      "With NMR, every peak (or cluster of peaks) corresponds to a unique type of atom being analyzed.\n\nThis",
    link1: "spectrum of Ethanol has three clusters of peaks,",
    desc3:
      "indicating that there are three distinct types of hydrogens in the molecule, with three unique chemical environments:\n\n",
    link2: "CH2,",
    link3: "OH,",
    link4: "CH3",
    desc4:
      "\nIn 1H NMR spectroscopy, most often every hydrogen on a particular carbon will be identical to the others on the same carbon.\n\nLet’s again consider the molecular structure of",
    link5: "Ethanol.",
    desc5: "Here we have",
    link6: "two hydrogens attached to the same carbon (CH2).",
    desc6:
      "These two hydrogens have an equivalent chemical environment.\n\nWe also have",
    link7: "three hydrogens attached to the other carbon (CH3)",
    desc7:
      "and these hydrogens share an equivalent environment.\n\nBut the chemical environments of the hydrogens in",
    link8: "CH2 are different from the hydrogens in CH3",
    desc8: "and the remaining hydrogen attached to oxygen in",
    link9: "OH",
    desc9:
      "has a chemical environment different from either of them.\n\nAgain, each of these three unique chemical environments are shown in the 1H NMR spectrum for Ethanol as",
    link10: "three separate clusters of peaks",
    desc10:
      "identifying the presence of hydrogen in our sample, but in three unique chemical environments (CH2, OH, and CH3).\n\n",
    link11: "Because all three chemical environments are different,",
    desc11: "there is no symmetry.\n\nIf we look at the",
    desc12: "H NMR spectrum for",
    link12: "diethyl ether",
    desc13: "we see  two of the same three peaks we saw in ethanol:\n\n",
    link13: "CH2",
    desc14: " and",
    link14: "CH3",
    desc15:
      "\nBut here, the peaks are showing two groups of CH2 and two groups of CH3 on either side of the central oxygen.",
    desc16: "\nThe result?\n\nSymmetry!",
  };

  const tokenize = (formula) =>
    formula
      .split(/(\d+)/)
      .map((token, idx) => (idx % 2 ? <sub key={idx}>{token}</sub> : token));

  const Formula = ({ children }) => (
    <code className="spectrum-main-link-text">{tokenize(children)}</code>
  );

  const [current, setCurrent] = React.useState();
  const symRef = React.useRef();
  const ethanolRef = React.useRef();
  const ethanolCH2Ref = React.useRef();
  const ethanolOHRef = React.useRef();
  const ethanolCH3Ref = React.useRef();
  const ethanolMolRef = React.useRef();
  const CH2MolRef = React.useRef();
  const CH3MolRef = React.useRef();
  const CHDiffRef = React.useRef();
  const OHDiffRef = React.useRef();
  const AllDiffRef = React.useRef();
  const diethylRef = React.useRef();
  const diethylCH2Ref = React.useRef();
  const diethylCH3Ref = React.useRef();

  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (current && !current.contains(event.target) && !(event.target.className==="spectrum-main-link-text" || event.target.className==="spectrum-main-link spectrum-main-link-text")) {
        console.log(event.target.className)
        var tl = gsap.timeline();
        tl
        .to(current, { opacity: 0, duration: 0.25 })
          .to(symRef.current, {
            opacity: 1,
            duration: 0.25,
          });
          setCurrent(undefined)
        }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [current]);

  //   return <div ref={wrapperRef}>{props.children}</div>;
  // }

  // OutsideAlerter.propTypes = {
  //   children: PropTypes.element.isRequired
  // };

  const onLink1Click = (e) => {
    e.preventDefault();

    var tl = gsap.timeline();
    tl.to(symRef.current, { opacity: 0 });
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
    tl.to(symRef.current, { opacity: 0 });

    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    })
      .to(current, { visibility: "hidden" })
      .to(ethanolCH2Ref.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      });
    setCurrent(ethanolCH2Ref.current);
  };
  const onLink3Click = (e) => {
    e.preventDefault();
    var tl = gsap.timeline();

    //change this later
    tl.to(symRef.current, { opacity: 0 });

    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    })
      .to(current, { visibility: "hidden" })
      .to(ethanolOHRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      });
    setCurrent(ethanolOHRef.current);
  };
  const onLink4Click = (e) => {
    e.preventDefault();
    var tl = gsap.timeline();

    //change this later
    tl.to(symRef.current, { opacity: 0 });

    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    })
      .to(current, { visibility: "hidden" })
      .to(ethanolCH3Ref.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      });
    setCurrent(ethanolCH3Ref.current);
  };
  const onLink5Click = (e) => {
    e.preventDefault();
    var tl = gsap.timeline();

    //change this later
    tl.to(symRef.current, { opacity: 0 });

    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    })
      .to(current, { visibility: "hidden" })
      .to(ethanolMolRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      });
    setCurrent(ethanolMolRef.current);
  };
  const onLink6Click = (e) => {
    e.preventDefault();
    var tl = gsap.timeline();

    //change this later
    tl.to(symRef.current, { opacity: 0 });

    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    })
      .to(current, { visibility: "hidden" })
      .to(CH2MolRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      });
    setCurrent(CH2MolRef.current);
  };
  const onLink7Click = (e) => {
    e.preventDefault();
    var tl = gsap.timeline();

    //change this later
    tl.to(symRef.current, { opacity: 0 });

    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    })
      .to(current, { visibility: "hidden" })
      .to(CH3MolRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      });
    setCurrent(CH3MolRef.current);
  };
  const onLink8Click = (e) => {
    e.preventDefault();
    var tl = gsap.timeline();

    //change this later
    tl.to(symRef.current, { opacity: 0 });

    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    })
      .to(current, { visibility: "hidden" })
      .to(CHDiffRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      });
    setCurrent(CHDiffRef.current);
  };
  const onLink9Click = (e) => {
    e.preventDefault();
    var tl = gsap.timeline();

    //change this later
    tl.to(symRef.current, { opacity: 0 });

    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    })
      .to(current, { visibility: "hidden" })
      .to(OHDiffRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      });
    setCurrent(OHDiffRef.current);
  };

  //Link10 is the same as Link1Click

  const onLink11Click = (e) => {
    e.preventDefault();
    var tl = gsap.timeline();

    //change this later
    tl.to(symRef.current, { opacity: 0 });

    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    })
      .to(current, { visibility: "hidden" })
      .to(AllDiffRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      });
    setCurrent(AllDiffRef.current);
  };
  const onLink12Click = (e) => {
    e.preventDefault();
    var tl = gsap.timeline();

    //change this later
    tl.to(symRef.current, { opacity: 0 });

    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    })
      .to(current, { visibility: "hidden" })
      .to(diethylRef.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      });
    setCurrent(diethylRef.current);
  };
  const onLink13Click = (e) => {
    e.preventDefault();
    var tl = gsap.timeline();

    //change this later
    tl.to(symRef.current, { opacity: 0 });

    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    })
      .to(current, { visibility: "hidden" })
      .to(diethylCH2Ref.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      });
    setCurrent(diethylCH2Ref.current);
  };
  const onLink14Click = (e) => {
    e.preventDefault();
    var tl = gsap.timeline();

    //change this later
    tl.to(symRef.current, { opacity: 0 });

    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    })
      .to(current, { visibility: "hidden" })
      .to(diethylCH3Ref.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.25,
      });
    setCurrent(diethylCH3Ref.current);
  };

  return (
    <>
      <div className="spectrum-main-title" ref={symRef}>
        {content.heading}
      </div>
      <Ethanol className="spectrum-main-svg" ref={ethanolRef} />
      <EthanolCH2
        className="spectrum-main-svg"
        ref={ethanolCH2Ref}
      ></EthanolCH2>
      <EthanolOH className="spectrum-main-svg" ref={ethanolOHRef}></EthanolOH>
      <EthanolCH3
        className="spectrum-main-svg"
        ref={ethanolCH3Ref}
      ></EthanolCH3>
      <EthanolMol
        className="spectrum-main-svg"
        ref={ethanolMolRef}
      ></EthanolMol>
      <CH2Mol className="spectrum-main-svg" ref={CH2MolRef}></CH2Mol>
      <CH3Mol className="spectrum-main-svg" ref={CH3MolRef}></CH3Mol>
      <CHDiff className="spectrum-main-svg" ref={CHDiffRef}></CHDiff>
      <OHDiff className="spectrum-main-svg" ref={OHDiffRef}></OHDiff>
      <AllDiff className="spectrum-main-svg" ref={AllDiffRef}></AllDiff>
      <Diethyl className="spectrum-main-svg" ref={diethylRef}></Diethyl>
      <DiethylCH2
        className="spectrum-main-svg"
        ref={diethylCH2Ref}
      ></DiethylCH2>
      <DiethylCH3
        className="spectrum-main-svg"
        ref={diethylCH3Ref}
      ></DiethylCH3>
      <div className="spectrum-main-desc">
        <div className="spectrum-main-desc1">{content.desc1}</div>
        <div className="spectrum-main-desc2">
          {content.desc2}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text"
            onClick={onLink1Click}
          >
            {content.link1}
          </Link>{" "}
          {content.desc3}
          <div className="center-space">
            <Link className="spectrum-main-link padding" onClick={onLink2Click}>
              <Formula>{content.link2}</Formula>
            </Link>
            <Link className="spectrum-main-link padding" onClick={onLink3Click}>
              <Formula>{content.link3}</Formula>
            </Link>
            <Link className="spectrum-main-link padding" onClick={onLink4Click}>
              <Formula>{content.link4}</Formula>
            </Link>
          </div>
          {content.desc4}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text"
            onClick={onLink5Click}
          >
            {content.link5}
          </Link>{" "}
          {content.desc5}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text"
            onClick={onLink6Click}
          >
            <Formula>{content.link6}</Formula>
          </Link>{" "}
          {content.desc6}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text"
            onClick={onLink7Click}
          >
            <Formula>{content.link7}</Formula>
          </Link>{" "}
          {content.desc7}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text"
            onClick={onLink8Click}
          >
            <Formula>{content.link8}</Formula>
          </Link>{" "}
          {content.desc8}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text"
            onClick={onLink9Click}
          >
            <Formula>{content.link9}</Formula>
          </Link>{" "}
          {content.desc9}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text"
            onClick={onLink1Click}
          >
            {content.link10}
          </Link>{" "}
          <Formula>{content.desc10}</Formula>
          <Link
            className="spectrum-main-link spectrum-main-link-text"
            onClick={onLink11Click}
          >
            {content.link11}
          </Link>{" "}
          {content.desc11} <sup>1</sup>
          {content.desc12}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text"
            onClick={onLink12Click}
          >
            {content.link12}
          </Link>{" "}
          {content.desc13}
          <div className="center">
            <Link className="spectrum-main-link" onClick={onLink13Click}>
              <Formula>{content.link13}</Formula>
            </Link>
            {content.desc14}{" "}
            <Link className="spectrum-main-link" onClick={onLink14Click}>
              <Formula>{content.link14}</Formula>
            </Link>
          </div>
          <Formula>{content.desc15}</Formula>
          <div className="center">{content.desc16}</div>
        </div>
      </div>
    </>
  );
}
