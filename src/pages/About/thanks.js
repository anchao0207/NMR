import React from "react";
import NavBar from "../../components/NavBar/navbar";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../assets/backArrow.svg";
import { gsap } from "gsap/all";


export default function Thanks() {

    const content = {
        heading: "With many\nthanks to",
        desc1:
          // eslint-disable-next-line no-multi-str
          "Gregory Akerman, Ameritac, Inc. - for cutting open our retired NMR instrument.\n\n\
Dr. Laura Behling, Dean of the College (2013-2017) - for seeing the vision and securing the funding necessary to cut open the retired instrument.\n\n\
Dr. Steven Cermak, USDA-ARS  - for transporting and coordinating the cutting of the instrument by Greg Akerman in Peoria, Illinois.\n\n\
Steve Davis - for headshots,  group photos of contributors, and action photography.\n\n\
Fisk Design Group - for providing ongoing design work, editing, and project management long after completion of Kelly Fisk’s senior capstone project.\n\n\
Alex Fluegel - for help with getting the Raspberry Pi, website and display up and running initially and for advising Philip Griffin on how best to use these components.\n\n\
Dr. Gregory Gilbert, Professor of Art History & Museum Studies - for facilitating connections to interactive designers in museums.\n\n\
Holabird & Root Architects - for accommodating a last-minute redesign of SMC A-core to house and display the retired instrument.\n\n\
Mark Holmes, Professor of Art - for designing and building custom enclosures for electrical components.\n\n\
Bradley McKinney, Lead Interactive Technology Instructional Designer at The Children’s Museum of Indianapolis - for providing very insightful guidance related to interactive displays in the earliest design stages.\n\n\
Levi Morgan - for securely mounting the Raspberry Pi.\n\n\
Matt Reed - for audio/visual support.\n\n\
Donna Robinson - for administrative support.\n\n\
Dr. Michael Schneider, Provost and Dean of Knox College - for financial support of the student programming team.\n\n\
Dr. Mark Shroyer, Professor of Physics - for content editing and contributions.\n\n\
Tim Stedman, Associate Professor of Art - for design mentorship and supervision of Kelly Fisk’s capstone project.\n\n\
Dr. Karl Vermillion, USDA-ARS - for inspiration and content editing.\n\n\
Carla Wehmeyer - for in-class and field research photography of students and faculty.",
        };

  const mainRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const backwardRef = React.useRef(null);
  
  let navigate = useNavigate();


  React.useEffect(() => {
    gsap.to(mainRef.current, {opacity: 1, duration: 1});
  });

  const backwardClick = () => {
    let path = "/About";
    navigate(path);
  };

  return (
    <div className="instrumentation">
      <NavBar></NavBar>
      <div className="navTitle" ref={titleRef}>
        <span>Thanks</span>
      </div>
      <div className="instrumentation-main" ref={mainRef}>
      <>
      <div className="header" ref={titleRef}>
        <div className="head-text">{content.heading}</div>
      </div>
      <div className="sizematter-main-desc">
        <div className="sizematter-main-desc2">
          {content.desc1}
        </div>
      </div>
    </>
        <Back
          ref={backwardRef}
          className="spectrum-back"
          onClick={backwardClick}
        ></Back>
      </div>
    </div>
  );
}
