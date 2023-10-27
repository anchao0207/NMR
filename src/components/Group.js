import { Link } from "react-router-dom";
import { useCollapse } from "react-collapsed";
import React from "react";
import { gsap } from "gsap/all";

export default function Group(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const imgRef = React.useRef(null);
  const imgRef2 = React.useRef(null);
//   const imgRef = React.useRef(null);

  return (
    <div className="credit-group">
      {/* <img className="image" src={require("./"+props.link[0][0]+".png")} alt="" /> */}

      {props.link[0][0] == "Dr. Diana Cermak," ? (
        <div id="cermak" className="about-img-container" ref={imgRef}>
          <img
            className="image about-img"
            src={require("./" + props.link[0][0] + ".png")}
            alt=""
          />
        </div>
      ) : null}
      {props.link[0][0] == "Kelly Fisk, class of ‘22" ? (
        <div id="kelly" className="about-img-container" ref={imgRef}>
          <img
            className="image about-img"
            src={require("./" + props.link[0][0] + ".png")}
            alt=""
          />
        </div>
      ) : null}
      {props.link[0][0] == "Philip Griffin, class of ‘20" ? (
        <div id="philip" className="about-img-container" ref={imgRef}>
          <img
            className="image about-img"
            src={require("./" + props.link[0][0] + ".png")}
            alt=""
          />
        </div>
      ) : null}
      {props.link[0][0] == "An Trieu, class of ‘24" ? (
        <div id="an" className="about-img-container" ref={imgRef}>
          <img
            className="image about-img"
            src={require("./" + props.link[0][0] + ".png")}
            alt=""
          />
        </div>
      ) : null}
      {props.link[0][0] == "Thy Le, class of ‘24" ? (
        <div id="thy" className="about-img-container" ref={imgRef}>
          <img
            className="image about-img"
            src={require("./" + props.link[0][0] + ".png")}
            alt=""
          />
        </div>
      ) : null}
      {props.link[2] && props.link[2][0] == "Adam Brohl, class of ‘24" ? (
        <div id="adam" className="about-img-container" ref={imgRef2}>
          <img
            className="image about-img"
            src={require("./" + props.link[2][0] + ".png")}
            alt=""
          />
        </div>
      ) : null}
      {props.link[1] && props.link[1][0] == "Kelly Fisk, class of ‘22" ? (
        <div id="kelly2" className="about-img-container" ref={imgRef}>
          <img
            className="image about-img"
            src={require("./" + props.link[1][0] + ".png")}
            alt=""
          />
        </div>
      ) : null}
      {typeof props.desc != "object" ? (
        <div className="credit-main-desc1">{props.desc}</div>
      ) : (
        <>
          <div className="credit-main-desc1">{props.desc[0]}</div>
          <div className="credit-main-desc1">{props.desc[1]}</div>
        </>
      )}

      {props.link.map((i) => {
        return (
          <>
            <Link
              className="spectrum-main-link spectrum-main-link-text link"
              {...getToggleProps()}
              onClick={() => {
                gsap.to(document.getElementById("biglogo"), {
                  duration: 0.5,
                  opacity: 0,
                });
                gsap.to(document.getElementById("cermak"), {
                  duration: 0.5,
                  opacity: 0,
                });
                gsap.to(document.getElementById("kelly"), {
                  duration: 0.5,
                  opacity: 0,
                });
                gsap.to(document.getElementById("philip"), {
                  duration: 0.5,
                  opacity: 0,
                });
                gsap.to(document.getElementById("an"), {
                  duration: 0.5,
                  opacity: 0,
                });
                gsap.to(document.getElementById("thy"), {
                  duration: 0.5,
                  opacity: 0,
                });
                gsap.to(document.getElementById("adam"), {
                  duration: 0.5,
                  opacity: 0,
                });
                gsap.to(document.getElementById("kelly2"), {
                  duration: 0.5,
                  opacity: 0,
                });
                if (imgRef.current != null) {
                    if(i[0]==="Adam Brohl, class of ‘24"){
                        gsap.to(imgRef2.current, { duration: 0.5, opacity: 1 });
                    } else if(i[0]==="Jessi Quach, class of '24"){
                        gsap.to(document.getElementById("biglogo"), {
                            duration: 0.5,
                            opacity: 1,
                          });
                    }
                    else if(i[0]==="James Adamson, class of ‘23"){
                        gsap.to(document.getElementById("biglogo"), {
                            duration: 0.5,
                            opacity: 1,
                          });
                    }
                    else {
                        gsap.to(imgRef.current, { duration: 0.5, opacity: 1 });
                    }
                } else {
                  gsap.to(document.getElementById("biglogo"), {
                    duration: 0.5,
                    opacity: 1,
                  });
                }
              }}
            >
              {i[0]}
            </Link>
            <div className="credit-main-desc2">{i[1]}</div>
            <div className="credit-main-desc2">{i[2]}</div>
            <br />
          </>
        );
      })}
      <div {...getCollapseProps()} className="credit-main-desc2">
        {props.sub}
      </div>
    </div>
  );
}
