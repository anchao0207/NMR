import React from "react";
import NavBar from "../../components/NavBar/navbar";
import "./nmrDiagram.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import axios from "axios";
//import { ReactComponent as Diagram } from "../../assets/NMRDiagramPlaceholder.png";

export default function NMRDiagram() {
  const titleRef = React.useRef(null);

  let navigate = useNavigate();

  const backwardClick = () => {
    let path = "/NMRFundamentals/";
    navigate(path);
  }

  const mainRef = React.useRef(null);

  const onMagnetClick = async (e) => {
    try {
      await axios({
        method: "POST",
        url: "http://localhost:8080/off",
      });
      await axios({
        method: "POST",
        url: "http://localhost:8080/magnet",
      });
    } catch (err) {
      console.log(err);
    }
    e.preventDefault();
  };

  const onHeliClick = async (e) => {
    try {
      await axios({
        method: "POST",
        url: "http://localhost:8080/off",
      });
      await axios({
        method: "POST",
        url: "http://localhost:8080/temperature-heli",
      });
    } catch (err) {
      console.log(err);
    }
    e.preventDefault();
  };

  const onNitroClick = async (e) => {
    try {
      await axios({
        method: "POST",
        url: "http://localhost:8080/off",
      });
      await axios({
        method: "POST",
        url: "http://localhost:8080/temperature-nitro",
      });
    } catch (err) {
      console.log(err);
    }
    e.preventDefault();
  };

  const onMylarClick = async (e) => {
    try {
      await axios({
        method: "POST",
        url: "http://localhost:8080/off",
      });
      await axios({
        method: "POST",
        url: "http://localhost:8080/temperature-mylar",
      });
    } catch (err) {
      console.log(err);
    }
    e.preventDefault();
  };

  const onSampleClick = async (e) => {
    try {
      await axios({
        method: "POST",
        url: "http://localhost:8080/off",
      });
      await axios({
        method: "POST",
        url: "http://localhost:8080/sample",
      });
    } catch (err) {
      console.log(err);
    }
    e.preventDefault();
  };

  const onFieldClick = async (e) => {
    try {
      await axios({
        method: "POST",
        url: "http://localhost:8080/off",
      });
      await axios({
        method: "POST",
        url: "http://localhost:8080/field",
      });
    } catch (err) {
      console.log(err);
    }
    e.preventDefault();
  };

  const onHClick = async (e) => {
    try {
      await axios({
        method: "POST",
        url: "http://localhost:8080/off",
      });
      await axios({
        method: "POST",
        url: "http://localhost:8080/pulseH",
      });
    } catch (err) {
      console.log(err);
    }
  
    e.preventDefault();
  };

  return (
    <>
      <div className="home">
        <NavBar></NavBar>
        <div className="navTitle" ref={titleRef}>
          <span>Diagram of Components</span>
        </div>
        <div className="diagram">
          
        <img className="image" src={require("../../assets/NMRDiagramPlaceholder.png")} alt="" />
        </div>
  
        <Stack className="section2 button-list">
            <Link to="/NMRDiagram"><button onClick={onMagnetClick}>The Magnet</button></Link>
            <Link to="/NMRDiagram"><button onClick={onHeliClick}>Liquid Helium</button></Link>
            <Link to="/NMRDiagram"><button onClick={onNitroClick}>Liquid Nitrogen</button></Link>
            <Link to="/NMRDiagram"><button onClick={onMylarClick}>Mylar</button></Link>
            <Link to="/NMRDiagram"><button onClick={onSampleClick}>The Sample</button></Link>
            <Link to="/NMRDiagram"><button onClick={onFieldClick}>Shim Coils</button></Link>
            <Link to="/NMRDiagram"><button onClick={onHClick}>The Pulse</button></Link>
        </Stack>

      </div>
    </>
  )
}
