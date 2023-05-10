import React from "react";
import "./interpretingSpectrum.css";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import { ReactComponent as Ethanol } from "../../assets/Ethanol Spectrum.svg";
import { ReactComponent as OH } from "../../assets/singlet for the OH in orange.svg";
import { ReactComponent as CH3 } from "../../assets/triplet for the CH3 in purple.svg";
import { ReactComponent as CH2 } from "../../assets/quartet for the CH2 in pink.svg";
import { ReactComponent as Four } from "../../assets/Four lines quartet.svg";
import { ReactComponent as Three } from "../../assets/Three line triplet.svg";
import { ReactComponent as Orange } from "../../assets/Orange Peak is a singlet.svg";
import { ReactComponent as Pascal } from "../../assets/PT35.svg";


export default function ChemicalShift() {
  const content = {
    heading: "Spliting",
    desc1: "How Many\nNeighboring\nHydrogrens",
    desc2: "A very cool thing about 1H NMR spectroscopy is that hydrogens on neighboring carbons have an impact on each other.\n\nThis is a feature called splitting (or coupling) and will turn a peak in a 1H NMR spectrum into a set of peaks that often has predictable patterns.\n\nHow a peak splits, where one peak (a singlet) becomes two (a doublet) or three (a triplet) or more, is a direct outcome of how many neighboring hydrogens are present.\n\nFor example, in this",
    link1: "spectrum of Ethanol",
    desc3: ", we see a",
    link2: "singlet for the OH in orange",
    desc4:
      ", a",
    link3: "triplet for CH3 in purple",
    desc5: ", and a",
    link4: "quartet for the CH2 in pink.",
    desc6: "\n\nWhile integration measures how many hydrogens contribute to a specific peak, splitting shows how many other hydrogens are neighboring.\n\nSplitting works best with hydrogens on carbons and follows the N+1 rule: N is the number of neighboring hydrogens and the peak is split into N+1 lines. So, if the hydrogen has three neighboring hydrogens (N = 3), then N + 1 = 4 and the peak is split into",
    link5: "four lines, called a quartet, as we see in pink (CH2).",
    desc7: "If there the hydrogen has two neighboring hydrogens (N = 2), then N + 1 = 3 and the peak will be split into",
    link6:"three lines, called a triplet, as we see in purple (CH3).",
    desc8: "\n\nThe",
    link7:"orange peak (OH) is a singlet",
    desc9: "because it is attached to an oxygen and does not participating in splitting like hydrogens on carbons do.\n\nAnother common splitting pattern is a doublet, where a hydrogen would neighbor 1 hydrogen.\n\nFinally, sometimes the pattern is very complicated, or overlapping with other patterns. This is given the term multiplet.\n\nWhen figuring out splitting, every neighboring hydrogen counts—even if those hydrogens are identical. The patterns seen in a 1H NMR spectrum follow",
    link8:"Pascal’s Triangle.",
    desc10:"\n\nWhen a splitting pattern does NOT fit the N + 1 rule (a predictable pattern), it is called a multiplet—this is very common for aromatic hydrogens."
  };

  const tokenize = (formula) =>
    formula
      .split(/(\d+)/)
      .map((token, idx) => (idx % 2 ? <sub key={idx}>{token}</sub> : token));

  const Formula = ({ children }) => (
    <code className="spectrum-main-link-text link">{tokenize(children)}</code>
  );

  const [current, setCurrent] = React.useState();
  const splitingRef = React.useRef();
  const ethanolRef = React.useRef();
  const ohRef = React.useRef();
  const ch3Ref = React.useRef();
  const ch2Ref = React.useRef();
  const fourRef = React.useRef();
  const threeRef = React.useRef();
  const orangeRef = React.useRef();
  const pascalRef = React.useRef();


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
            splitingRef.current,
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
    tl.to(splitingRef.current, { opacity: 0 });
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
    tl.to(splitingRef.current, { opacity: 0 });
    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    }).to(current, { visibility: "hidden" });
    tl.to(ohRef.current, {
      visibility: "visible",
      opacity: 1,
      duration: 0.25,
    });
    setCurrent(ohRef.current);
  };
  const onLink3Click = (e) => {
    e.preventDefault();

    var tl = gsap.timeline();
    tl.to(splitingRef.current, { opacity: 0 });
    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    }).to(current, { visibility: "hidden" });
    tl.to(ch3Ref.current, {
      visibility: "visible",
      opacity: 1,
      duration: 0.25,
    });
    setCurrent(ch3Ref.current);
  };
  const onLink4Click = (e) => {
    e.preventDefault();

    var tl = gsap.timeline();
    tl.to(splitingRef.current, { opacity: 0 });
    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    }).to(current, { visibility: "hidden" });
    tl.to(ch2Ref.current, {
      visibility: "visible",
      opacity: 1,
      duration: 0.25,
    });
    setCurrent(ch2Ref.current);
  };
  const onLink5Click = (e) => {
    e.preventDefault();

    var tl = gsap.timeline();
    tl.to(splitingRef.current, { opacity: 0 });
    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    }).to(current, { visibility: "hidden" });
    tl.to(fourRef.current, {
      visibility: "visible",
      opacity: 1,
      duration: 0.25,
    });
    setCurrent(fourRef.current);
  };
  const onLink6Click = (e) => {
    e.preventDefault();

    var tl = gsap.timeline();
    tl.to(splitingRef.current, { opacity: 0 });
    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    }).to(current, { visibility: "hidden" });
    tl.to(threeRef.current, {
      visibility: "visible",
      opacity: 1,
      duration: 0.25,
    });
    setCurrent(threeRef.current);
  };
  const onLink7Click = (e) => {
    e.preventDefault();

    var tl = gsap.timeline();
    tl.to(splitingRef.current, { opacity: 0 });
    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    }).to(current, { visibility: "hidden" });
    tl.to(orangeRef.current, {
      visibility: "visible",
      opacity: 1,
      duration: 0.25,
    });
    setCurrent(ethanolRef.current);
  };
  const onLink8Click = (e) => {
    e.preventDefault();

    var tl = gsap.timeline();
    tl.to(splitingRef.current, { opacity: 0 });
    tl.to(current, {
      opacity: 0,
      duration: 0.25,
    }).to(current, { visibility: "hidden" });
    tl.to(pascalRef.current, {
      visibility: "visible",
      opacity: 1,
      duration: 0.25,
    });
    setCurrent(pascalRef.current);
  };

  return (
    <>
      <div className="spectrum-main-title" ref={splitingRef}>
        {content.heading}
      </div>
      <Ethanol className="spectrum-main-svg" ref={ethanolRef} />
      <OH className="spectrum-main-svg" ref={ohRef} />
      <CH3 className="spectrum-main-svg" ref={ch3Ref} />
      <CH2 className="spectrum-main-svg" ref={ch2Ref} />
      <Four className="spectrum-main-svg" ref={fourRef} />
      <Three className="spectrum-main-svg" ref={threeRef} />
      <Orange className="spectrum-main-svg" ref={orangeRef} />
      <Pascal className="spectrum-main-svg" ref={pascalRef} />

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
          </Link>
          {content.desc4}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text link"
            onClick={onLink3Click}
          >
            <Formula>{content.link3}</Formula>
          </Link>
          {content.desc5}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text link"
            onClick={onLink4Click}
          >
            <Formula>{content.link4}</Formula>
          </Link>{" "}
          {content.desc6}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text link"
            onClick={onLink5Click}
          >
            <Formula>{content.link5}</Formula>
          </Link>{" "}
          {content.desc7}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text link"
            onClick={onLink6Click}
          >
            <Formula>{content.link6}</Formula>
          </Link>{" "}
          {content.desc8}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text link"
            onClick={onLink7Click}
          >
            {content.link7}
          </Link>{" "}
          {content.desc9}{" "}
          <Link
            className="spectrum-main-link spectrum-main-link-text link"
            onClick={onLink8Click}
          >
            {content.link8}
          </Link>{" "}
          {content.desc10}
        </div>
      </div>
    </>
  );
}
