import React from "react";
import NavBar from "../../components/NavBar/navbar";
import "./nmrDiagram.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
//import { ReactComponent as Diagram } from "../../assets/NMRDiagramPlaceholder.png";

export default function NMRDiagram() {
  const titleRef = React.useRef(null);

  let navigate = useNavigate();

  const backwardClick = () => {
    let path = "/NMRFundamentals/";
    navigate(path);
  }

  const mainRef = React.useRef(null);

  return (
    <>
      <div className="home">
        <NavBar></NavBar>
        <div className="navTitle" ref={titleRef}>
          <span>Diagram of Components</span>
        </div>

        <img className="image" src={require("../../assets/NMRDiagramPlaceholder.png")} alt="" />
  
        <Stack className="section2">
            <Link to="/NMRDiagram"><button>The Magnet</button></Link>
            <Link to="/NMRDiagram"><button>Liquid Helium</button></Link>
            <Link to="/NMRDiagram"><button>Liquid Nitrogen</button></Link>
            <Link to="/NMRDiagram"><button>Mylar</button></Link>
            <Link to="/NMRDiagram"><button>The Sample</button></Link>
            <Link to="/NMRDiagram"><button>Shim Coils</button></Link>
            <Link to="/NMRDiagram"><button>The Pulse</button></Link>
        </Stack>
      </div>
    </>
  )
}
