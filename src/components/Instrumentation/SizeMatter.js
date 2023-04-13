import React from "react";
import "./sizeMatter.css";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { gsap } from "gsap/all";

export default function SizeMatter() {
  const content = {
    heading: "Size\nMatter",
    desc1:
      "NMR instruments vary in size according to magnet strength, reported in megahertz (MHz).\n\nOur ",
    link1: "old instrument",
    desc2: " is a 270 MHz instrument, while ",
    link2: "our current operating instrument",
    desc3:
      " is a 400 MHz instrument, located in the basement of the C Wing of this building.\n\nThere are tabletop NMR instruments that fit on a lab bench all the way to instruments that are taller than an average person and take up their own special room.\n\nThese instruments are expensive and delicate, so the operator must stay focused and follow all operating instructions.       ",
  };

  const [playAnimation, setPlayAnimation] = React.useState(false);

  const arrowsRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const imgRef = React.useRef(null);



  const link1Click = async (e) => {
    e.preventDefault();
    if (playAnimation) return;
    setPlayAnimation(true);
    await animation1();
    setPlayAnimation(false);
  };

  const animation1 = () => {
    return new Promise((resolve) => {
      var tl = gsap.timeline();
      //set title off
      tl.to(titleRef.current, { opacity: 0, duration: 0.25 })
      //set img off
        .to(imgRef.current, { opacity: 0, duration: 0.25 })
        .to(imgRef.current, { visibility: "hidden" })
      //bring arrows up
        .to(arrowsRef.current.children, {
          visibility: "visible",
          duration: 1,
          opacity: 1,
          stagger: {
            amount: 1.5,
            each: 0.5,
            from: "end",
          },
          y: 30,
          ease: "power1.out",
          onComplete: resolve,
        });
    });
  };

  const link2Click = async (e) => {
    e.preventDefault();
    if (playAnimation) return;
    setPlayAnimation(true);
    await animation2();
    setPlayAnimation(false);
  };

  const animation2 = () => {
    return new Promise((resolve) => {
      var tl = gsap.timeline();
      //set title off
      tl.to(titleRef.current, { opacity: 0, duration: 0.25 })
      //set arrows off
        .to(arrowsRef.current.children, { opacity: 0, duration: 0.25 })
        .to(arrowsRef.current.children, { visibility: "hidden" })
      //bring img up
        .to(imgRef.current, {
          visibility: "visible",
          duration: 0.5,
          opacity: 1,
          onComplete: resolve,
        });
    });
  };

  return (
    <>
      <div className="header" ref={titleRef}>
        <div className="head-text">{content.heading}</div>
      </div>
      <div className="arrow-animation" ref={arrowsRef}>
        <Arrow className="invi"></Arrow>
        <Arrow className="invi"></Arrow>
        <Arrow className="invi"></Arrow>
        <Arrow className="invi"></Arrow>
        <Arrow className="invi"></Arrow>
      </div>
      <img
        className="current-instrument invi"
        ref={imgRef}
        src={require("../../assets/CurrentInstrument.png")}
        alt=""
      />
      <div className="sizematter-main-desc">
        <div className="sizematter-main-desc2">
          {content.desc1}
          <Link
            className="sizematter-main-link sizematter-main-link-text"
            onClick={link1Click}
          >
            {content.link1}
          </Link>
          {content.desc2}
          <Link
            className="sizematter-main-link sizematter-main-link-text"
            onClick={link2Click}
          >
            {content.link2}
          </Link>
          {content.desc3}
        </div>
      </div>
    </>
  );
}
