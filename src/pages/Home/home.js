import React from "react";
import "./home.css"
import { useViewport } from "../../viewportContext";
import {ReactComponent as NuclearMagneticResonance} from './NuclearMagneticResonance.svg';
import {ReactComponent as PlayButton} from './playButton.svg';

export default function Home() {
  const { width, height } = useViewport();
  return (
    <div className="home">
      <div className="section1">
      <NuclearMagneticResonance className="NMR"/>
      </div>
      <div className="section2">
      <PlayButton className="play-button"/>
      </div>
    </div>
  );
}
