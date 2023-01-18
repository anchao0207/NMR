import React from "react";
import "./research.css";
import { useViewport } from "../../viewportContext";
import NavBar3 from "../NavBar/navbar3";
import Stack from 'react-bootstrap/Stack';

const content = {header: "Dr. Diana Cermak"};

const MainBody = (props) => {
    return(
        <div className="screen">
            <NavBar3></NavBar3>
            <div className="bodySection" >
                <div className = "headingSection">{props.header}</div>
            </div>
            <div className="descriptionSection">
                <Stack>
                    <a href="http://localhost:3000/Faculty2Asym/">
                        <button>Asymmetric Synthesis</button>
                    </a>
                   
                    <a href="http://localhost:3000/Faculty2Phospho/">
                        <button>Synthesis of phosphorous derivatives</button>
                    </a>
                </Stack>
            </div>
        </div>
    );
};

const BodyFirstPage = () => {
    return <>{MainBody(content)}</>;
  };
  export default BodyFirstPage;