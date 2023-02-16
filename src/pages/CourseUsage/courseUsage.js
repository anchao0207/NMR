import React from "react";
import "./courseUsage.css";
import { ReactComponent as NuclearMagneticResonance } from "../Home/NuclearMagneticResonance.svg";
import NavBar from "../../components/NavBar/navbar2";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

export default function CourseUsage() {
  return (
    <>
      <div className="home">
        <NavBar></NavBar>
        <div className="main-body">
          <div className="section1">
            <NuclearMagneticResonance className="NMR" />
          </div>
          <div className="section2" id="course">
            <Stack gap={3}>
              <Link to="/GeneralChemistry/">
                <button>
                  General<br></br>Chemistry
                </button>
                {/* <button onClick={handleClick(o)}>{o}</button> */}
              </Link>
              <Link to="/OrganicChemistry/">
                <button>
                  Organic
                  <br />
                  Chemistry
                </button>
              </Link>
              <Link to="/StillDeveloping/">
                <button>
                  Biochemical
                  <br />
                  Instrumentation
                </button>
              </Link>
              <Link to="/StillDeveloping/">
                <button>
                  Advanced
                  <br />
                  Synthesis
                </button>
              </Link>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}
