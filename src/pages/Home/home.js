import React from "react";
import "./home.css";
import { ReactComponent as NuclearMagneticResonance } from "./NuclearMagneticResonance.svg";
import { ReactComponent as PlayButton } from "./playButton.svg";
import { ReactComponent as Back } from "../../assets/backArrow.svg";
import { ReactComponent as Forward } from "../../assets/forwardArrow.svg";
import { gsap } from "gsap/all";
import NavBar from "../../components/NavBar/navbar";
import Technology from "../../components/Main/technology";
import Magnet from "../../components/Main/magnet";
import Temperature from "../../components/Main/temperature";
import Sample from "../../components/Main/sample";
import Pulse from "../../components/Main/pulse";
import FourNuclei from "../../components/Main/fourNuclei";
import Acquisition from "../../components/Main/acquisition";
import Field from "../../components/Main/field";
import Nuclei from "../../components/Main/nuclei";
import HNuclei from "../../components/Main/hNuclei";
import Transformation from "../../components/Main/transformation";
import BiggerPicture from "../../components/Main/biggerPicture";
import Spectrum from "../../components/Main/spectrum";

export default function Home() {
  const mainRef = React.useRef(null);
  const playRef = React.useRef(null);
  const nmrRef = React.useRef(null);
  const hiwRef = React.useRef(null);
  const techRef = React.useRef(null);
  const back1Ref = React.useRef(null);
  const text1Ref = React.useRef(null);
  const forward1Ref = React.useRef(null);
  const back2Ref = React.useRef(null);
  const text2Ref = React.useRef(null);
  const forward2Ref = React.useRef(null);
  const magnetRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const tempRef = React.useRef(null);
  const back3Ref = React.useRef(null);
  const text3Ref = React.useRef(null);
  const forward3Ref = React.useRef(null);
  const back4Ref = React.useRef(null);
  const text4Ref = React.useRef(null);
  const forward4Ref = React.useRef(null);
  const sampleRef = React.useRef(null);
  const back5Ref = React.useRef(null);
  const text5Ref = React.useRef(null);
  const forward5Ref = React.useRef(null);
  const fieldRef = React.useRef(null);
  const back6Ref = React.useRef(null);
  const text6Ref = React.useRef(null);
  const forward6Ref = React.useRef(null);
  const nucleiRef = React.useRef(null);
  const back7Ref = React.useRef(null);
  const text7Ref = React.useRef(null);
  const forward7Ref = React.useRef(null);
  const fourNRef = React.useRef(null);
  const back8Ref = React.useRef(null);
  const text8Ref = React.useRef(null);
  const forward8Ref = React.useRef(null);
  const hNucleiRef = React.useRef(null);
  const back9Ref = React.useRef(null);
  const text9Ref = React.useRef(null);
  const forward9Ref = React.useRef(null);
  const pulseRef = React.useRef(null);
  const back10Ref = React.useRef(null);
  const text10Ref = React.useRef(null);
  const forward10Ref = React.useRef(null);
  const back11Ref = React.useRef(null);
  const text11Ref = React.useRef(null);
  const forward11Ref = React.useRef(null);
  const back12Ref = React.useRef(null);
  const text12Ref = React.useRef(null);
  const forward12Ref = React.useRef(null);
  const back13Ref = React.useRef(null);
  const text13Ref = React.useRef(null);
  const forward13aRef = React.useRef(null);
  const forward13bRef = React.useRef(null);
  const acquiRef = React.useRef(null);
  const spectrumRef = React.useRef(null);
  const pictureRef = React.useRef(null);
  const transRef = React.useRef(null);

  React.useEffect(()=>{
    gsap.to(mainRef.current, {opacity: 1, duration: 1});
  },[mainRef])

  const startClick = () => {
    var tl1= gsap.timeline();
    tl1.add("start")
      .to(nmrRef.current, { opacity: 0, duration: 0.5 }, "start")
      .to(playRef.current, { opacity: 0, duration: 0.5 }, "start")
      .to(nmrRef.current, { visibility:'hidden'},"hide")
      .to(playRef.current, { visibility:'hidden'},"hide")
      .to(hiwRef.current, { visibility:'visible', opacity: 1, duration: 1.5})
      .to(hiwRef.current, { opacity: 0, duration: 0.5})
      .to(hiwRef.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(titleRef.current, { visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(techRef.current, { visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back1Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second") 
      .to(text1Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second") 
      .to(forward1Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  // TECHNOLGY PAGE NAVIGATION

  const back1Click = () => {
    var tl2 = gsap.timeline();
    tl2.add("start")
    .to(back1Ref.current, {  opacity: 0, duration: 0.5 }, "start")
    .to(forward1Ref.current, {  opacity: 0, duration: 0.5 }, "start")
    .to(techRef.current, {  opacity: 0, duration: 0.5 }, "start")
    .to(text1Ref.current, {  opacity: 0, duration: 0.5 }, "start")
    .to(titleRef.current, {  opacity: 0, duration: 0.5 }, "start")
    .to(back1Ref.current, { visibility:'hidden' })
    .to(forward1Ref.current, { visibility:'hidden' })
    .to(techRef.current, { visibility:'hidden' })
    .to(text1Ref.current, { visibility:'hidden'},"hide")
    .to(titleRef.current, { visibility:'hidden'},"hide")
    // .add("second")
      .to(nmrRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(playRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  const forward1Click = () => {
    var tl3 = gsap.timeline();
    tl3.add("start")
      .to(back1Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward1Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(techRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text1Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back1Ref.current, { visibility:'hidden'},"hide")
      .to(forward1Ref.current, { visibility:'hidden'},"hide")
      .to(techRef.current, { visibility:'hidden'},"hide")
      .to(text1Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(magnetRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back2Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward2Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text2Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  // MAGNET PAGE NAVIGATION

  const back2Click = () => {
    var tl4 = gsap.timeline();
    tl4.add("start")
      .to(back2Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward2Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(magnetRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text2Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back2Ref.current, { visibility:'hidden'},"hide")
      .to(forward2Ref.current, { visibility:'hidden'},"hide")
      .to(magnetRef.current, { visibility:'hidden'},"hide")
      .to(text2Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(techRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back1Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward1Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text1Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  const forward2Click = () => {
    var tl5 = gsap.timeline();
    tl5.add("start")
      .to(back2Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward2Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(magnetRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text2Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back2Ref.current, { visibility:'hidden'},"hide")
      .to(forward2Ref.current, { visibility:'hidden'},"hide")
      .to(magnetRef.current, { visibility:'hidden'},"hide")
      .to(text2Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(tempRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back3Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward3Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text3Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  // TEMPERATURE PAGE NAVIGATION

  const back3Click = () => {
    var tl6 = gsap.timeline();
    tl6.add("start")
      .to(back3Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward3Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(tempRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text3Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back3Ref.current, { visibility:'hidden'},"hide")
      .to(forward3Ref.current, { visibility:'hidden'},"hide")
      .to(tempRef.current, { visibility:'hidden'},"hide")
      .to(text3Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(magnetRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back2Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward2Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text2Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
      
  };

  const forward3Click = () => {
    var tl7 = gsap.timeline();
    tl7.add("start")
      .to(back3Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward3Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(tempRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text3Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back3Ref.current, { visibility:'hidden'},"hide")
      .to(forward3Ref.current, { visibility:'hidden'},"hide")
      .to(tempRef.current, { visibility:'hidden'},"hide")
      .to(text3Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(sampleRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back4Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward4Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text4Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
      
  };

  // SAMPLE PAGE NAVIGATION 

  const back4Click = () => {
    var tl8 = gsap.timeline();
    tl8.add("start")
      .to(back4Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward4Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(sampleRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text4Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back4Ref.current, { visibility:'hidden'},"hide")
      .to(forward4Ref.current, { visibility:'hidden'},"hide")
      .to(sampleRef.current, { visibility:'hidden'},"hide")
      .to(text4Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(tempRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back3Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward3Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text3Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };
  
  const forward4Click = () => {
    var tl9 = gsap.timeline();
    tl9.add("start")
      .to(back4Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward4Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(sampleRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text4Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back4Ref.current, { visibility:'hidden'},"hide")
      .to(forward4Ref.current, { visibility:'hidden'},"hide")
      .to(sampleRef.current, { visibility:'hidden'},"hide")
      .to(text4Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(fieldRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back5Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward5Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text5Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  }

  // FIELD PAGE NAVIGATION

  const back5Click = () => {
    var tl10 = gsap.timeline();
    tl10.add("start")
      .to(back5Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward5Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(fieldRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text5Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back5Ref.current, { visibility:'hidden'},"hide")
      .to(forward5Ref.current, { visibility:'hidden'},"hide")
      .to(fieldRef.current, { visibility:'hidden'},"hide")
      .to(text5Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(sampleRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back4Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward4Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text4Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  const forward5Click = () => {
    var tl11 = gsap.timeline();
    tl11.add("start")
      .to(back5Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward5Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(fieldRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text5Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back5Ref.current, { visibility:'hidden'},"hide")
      .to(forward5Ref.current, { visibility:'hidden'},"hide")
      .to(fieldRef.current, { visibility:'hidden'},"hide")
      .to(text5Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(nucleiRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back6Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward6Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text6Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  // NUCLEI PAGE NAVIGATION
  const back6Click = () => {
    var tl12 = gsap.timeline();
    tl12.add("start")
      .to(back6Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward6Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(nucleiRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text6Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back6Ref.current, { visibility:'hidden'},"hide")
      .to(forward6Ref.current, { visibility:'hidden'},"hide")
      .to(nucleiRef.current, { visibility:'hidden'},"hide")
      .to(text6Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(fieldRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back5Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward5Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text5Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  const forward6Click = () => {
    var tl13 = gsap.timeline();
    tl13.add("start")
      .to(back6Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward6Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(nucleiRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text6Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back6Ref.current, { visibility:'hidden'},"hide")
      .to(forward6Ref.current, { visibility:'hidden'},"hide")
      .to(nucleiRef.current, { visibility:'hidden'},"hide")
      .to(text6Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(fourNRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back7Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward7Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text7Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  // FOUR NUCLEI PAGE NAVIGATION
  const back7Click = () => {
    var tl14 = gsap.timeline();
    tl14.add("start")
      .to(back7Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward7Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(fourNRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text7Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back7Ref.current, { visibility:'hidden'},"hide")
      .to(forward7Ref.current, { visibility:'hidden'},"hide")
      .to(fourNRef.current, { visibility:'hidden'},"hide")
      .to(text7Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(nucleiRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back6Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward6Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text6Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  const forward7Click = () => {
    var tl15 = gsap.timeline();
    tl15.add("start")
      .to(back7Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward7Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(fourNRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text7Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back7Ref.current, { visibility:'hidden'},"hide")
      .to(forward7Ref.current, { visibility:'hidden'},"hide")
      .to(fourNRef.current, { visibility:'hidden'},"hide")
      .to(text7Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(hNucleiRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back8Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward8Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text8Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  // 1H NUCLEI PAGE NAVIGATION
  const back8Click = () => {
    var tl16 = gsap.timeline();
    tl16.add("start")
      .to(back8Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward8Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(hNucleiRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text8Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back8Ref.current, { visibility:'hidden'},"hide")
      .to(forward8Ref.current, { visibility:'hidden'},"hide")
      .to(hNucleiRef.current, { visibility:'hidden'},"hide")
      .to(text8Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(fourNRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back7Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward7Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text7Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  const forward8Click = () => {
    var tl17 = gsap.timeline();
    tl17.add("start")
      .to(back8Ref.current, { opacity: 0, duration: 0.5 }, "start")
      .to(forward8Ref.current, { opacity: 0, duration: 0.5 }, "start")
      .to(hNucleiRef.current, { opacity: 0, duration: 0.5 }, "start")
      .to(text8Ref.current, { opacity: 0, duration: 0.5 }, "start")
      .to(back8Ref.current, { visibility:'hidden'},"hide")
      .to(forward8Ref.current, { visibility:'hidden'},"hide")
      .to(hNucleiRef.current, { visibility:'hidden'},"hide")
      .to(text8Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(pulseRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back9Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward9Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text9Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  // PULSE PAGE NAVIGATION
  const back9Click = () => {
    var tl18 = gsap.timeline();
    tl18.add("start")
      .to(back9Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward9Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(pulseRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text9Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back9Ref.current, { visibility:'hidden'},"hide")
      .to(forward9Ref.current, { visibility:'hidden'},"hide")
      .to(pulseRef.current, { visibility:'hidden'},"hide")
      .to(text9Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(hNucleiRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back8Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward8Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text8Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  const forward9Click = () => {
    var tl19 = gsap.timeline();
    tl19.add("start")
      .to(back9Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward9Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(pulseRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text9Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back9Ref.current, { visibility:'hidden'},"hide")
      .to(forward9Ref.current, { visibility:'hidden'},"hide")
      .to(pulseRef.current, { visibility:'hidden'},"hide")
      .to(text9Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(acquiRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back10Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward10Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text10Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  // ACQUISITION PAGE NAVIGATION
  const back10Click = () => {
    var tl20 = gsap.timeline();
    tl20.add("start")
      .to(back10Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward10Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(acquiRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text10Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back10Ref.current, { visibility:'hidden'},"hide")
      .to(forward10Ref.current, { visibility:'hidden'},"hide")
      .to(acquiRef.current, { visibility:'hidden'},"hide")
      .to(text10Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(pulseRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back9Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward9Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text9Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  const forward10Click = () => {
    var tl21 = gsap.timeline();
    tl21.add("start")
      .to(back10Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward10Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(acquiRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text10Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back10Ref.current, { visibility:'hidden'},"hide")
      .to(forward10Ref.current, { visibility:'hidden'},"hide")
      .to(acquiRef.current, { visibility:'hidden'},"hide")
      .to(text10Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(transRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back11Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward11Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text11Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  // TRANSFORMATION PAGE NAVIGATION
  const back11Click = () => {
    var tl22 = gsap.timeline();
    tl22.add("start")
      .to(back11Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward11Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(transRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text11Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back11Ref.current, { visibility:'hidden'},"hide")
      .to(forward11Ref.current, { visibility:'hidden'},"hide")
      .to(transRef.current, { visibility:'hidden'},"hide")
      .to(text11Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(acquiRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back10Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward10Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text10Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  const forward11Click = () => {
    var tl23 = gsap.timeline();
    tl23.add("start")
      .to(back11Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward11Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(transRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text11Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back11Ref.current, { visibility:'hidden'},"hide")
      .to(forward11Ref.current, { visibility:'hidden'},"hide")
      .to(transRef.current, { visibility:'hidden'},"hide")
      .to(text11Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(spectrumRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back12Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward12Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text12Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  // SPECTRUM PAGE NAVIGATION
  const back12Click = () => {
    var tl24 = gsap.timeline();
    tl24.add("start")
      .to(back12Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward12Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(spectrumRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text12Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back12Ref.current, { visibility:'hidden'},"hide")
      .to(forward12Ref.current, { visibility:'hidden'},"hide")
      .to(spectrumRef.current, { visibility:'hidden'},"hide")
      .to(text12Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(transRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back11Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward11Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text11Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  const forward12Click = () => {
    var tl25 = gsap.timeline();
    tl25.add("start")
      .to(back12Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward12Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(spectrumRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text12Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back12Ref.current, { visibility:'hidden'},"hide")
      .to(forward12Ref.current, { visibility:'hidden'},"hide")
      .to(spectrumRef.current, { visibility:'hidden'},"hide")
      .to(text12Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(pictureRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back13Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward13aRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward13bRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text13Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  // BIGGER PICTURE PAGE NAVIGATION
  const back13Click = () => {
    var tl26 = gsap.timeline();
    tl26.add("start")
      .to(back13Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward13aRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(forward13bRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(pictureRef.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(text13Ref.current, {  opacity: 0, duration: 0.5 }, "start")
      .to(back13Ref.current, { visibility:'hidden'},"hide")
      .to(forward13aRef.current, { visibility:'hidden'},"hide")
      .to(forward13bRef.current, { visibility:'hidden'},"hide")
      .to(pictureRef.current, { visibility:'hidden'},"hide")
      .to(text13Ref.current, { visibility:'hidden'},"hide")
      // .add("second")
      .to(spectrumRef.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(back12Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(forward12Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second")
      .to(text12Ref.current, {visibility: 'visible', opacity:1, duration: 0.5}, "second");
  };

  return (
    <>
      <div className="home">
        <NavBar></NavBar>
        <div className="HIWTitle" ref={titleRef}>
          <span>How it Works</span>
        </div>
        <div className="main-body" ref={mainRef}>
          <div className="section1">
            <NuclearMagneticResonance ref={nmrRef} className="NMR" />
          </div>
          <div className="section1">
            <div className="HIW" ref={hiwRef}>
              <span>
                HOW IT
                <br />
                WORKS
              </span>
            </div>
          </div>
          <div className="section2">
            <PlayButton className="play-button" onClick={startClick} ref={playRef}/>
          </div>

          {/* TECHNOLOGY PAGE */}
          <div className="main-component" ref={techRef}>
            <Technology></Technology>
          </div>
          <Back className="back" ref={back1Ref} onClick={back1Click}/>
          <div className="page" ref={text1Ref}>
            <text className="textPage">1/13</text>
          </div>
          <Forward className="forward" ref={forward1Ref} onClick={forward1Click}/>

          {/* MAGNET PAGE */}
          <div className="main-component" ref={magnetRef}>
            <Magnet></Magnet>
          </div>
          <Back className="back" ref={back2Ref} onClick={back2Click}/>
          <div className="page" ref={text2Ref}>
            <text className="textPage">2/13</text>
          </div>
          <Forward className="forward" ref={forward2Ref} onClick={forward2Click}/>

          {/* TEMPERATURE PAGE */}
          <div className="main-component" ref={tempRef}>
            <Temperature></Temperature>
          </div>
          <Back className="back" ref={back3Ref} onClick={back3Click}/>
          <div className="page" ref={text3Ref}>
            <text className="textPage">3/13</text>
          </div>
          <Forward className="forward" ref={forward3Ref} onClick={forward3Click}/>

          {/* SAMPLE PAGE */}
          <div className="main-component" ref={sampleRef}>
            <Sample></Sample>
          </div>
          <Back className="back" ref={back4Ref} onClick={back4Click}/>
          <div className="page" ref={text4Ref}>
            <text className="textPage">4/13</text>
          </div>
          <Forward className="forward" ref={forward4Ref} onClick={forward4Click}/>

          {/* FIELD PAGE */}
          <div className="main-component" ref={fieldRef}>
            <Field></Field>
          </div>
          <Back className="back" ref={back5Ref} onClick={back5Click}/>
          <div className="page" ref={text5Ref}>
            <text className="textPage">5/13</text>
          </div>
          <Forward className="forward" ref={forward5Ref} onClick={forward5Click}/>

          {/* NUCLEI PAGE */}
          <div className="main-component" ref={nucleiRef}>
            <Nuclei></Nuclei>
          </div>
          <Back className="back" ref={back6Ref} onClick={back6Click}/>
          <div className="page" ref={text6Ref}>
            <text className="textPage">6/13</text>
          </div>
          <Forward className="forward" ref={forward6Ref} onClick={forward6Click}/>

          {/* FOUR NUCLEI PAGE */}
          <div className="main-component" ref={fourNRef}>
            <FourNuclei></FourNuclei>
          </div>
          <Back className="back" ref={back7Ref} onClick={back7Click}/>
          <div className="page" ref={text7Ref}>
            <text className="textPage">7/13</text>
          </div>
          <Forward className="forward" ref={forward7Ref} onClick={forward7Click}/>

          {/* 1H NUCLEI PAGE */}
          <div className="main-component" ref={hNucleiRef}>
            <HNuclei></HNuclei>
          </div>
          <Back className="back" ref={back8Ref} onClick={back8Click}/>
          <div className="page" ref={text8Ref}>
            <text className="textPage">8/13</text>
          </div>
          <Forward className="forward" ref={forward8Ref} onClick={forward8Click}/>

          {/* PULSE PAGE */}
          <div className="main-component" ref={pulseRef}>
            <Pulse></Pulse>
          </div>
          <Back className="back" ref={back9Ref} onClick={back9Click}/>
          <div className="page" ref={text9Ref}>
            <text className="textPage">9/13</text>
          </div>
          <Forward className="forward" ref={forward9Ref} onClick={forward9Click}/>

          {/* ACQUISITION PAGE */}
          <div className="main-component" ref={acquiRef}>
            <Acquisition></Acquisition>
          </div>
          <Back className="back" ref={back10Ref} onClick={back10Click}/>
          <div className="page" ref={text10Ref}>
            <text className="textPage">10/13</text>
          </div>
          <Forward className="forward" ref={forward10Ref} onClick={forward10Click}/>

          {/* TRANSFORMATION PAGE */}
          <div className="main-component" ref={transRef}>
            <Transformation></Transformation>
          </div>
          <Back className="back" ref={back11Ref} onClick={back11Click}/>
          <div className="page" ref={text11Ref}>
            <text className="textPage">11/13</text>
          </div>
          <Forward className="forward" ref={forward11Ref} onClick={forward11Click}/>

          {/* SPECTRUM PAGE */}
          <div className="main-component" ref={spectrumRef}>
            <Spectrum></Spectrum>
          </div>
          <Back className="back" ref={back12Ref} onClick={back12Click}/>
          <div className="page" ref={text12Ref}>
            <text className="textPage">12/13</text>
          </div>
          <Forward className="forward" ref={forward12Ref} onClick={forward12Click}/>

          {/* BIGGER PICTURE PAGE */}
          <div className="main-component" ref={pictureRef}>
            <BiggerPicture></BiggerPicture>
          </div>
          <Back className="back" ref={back13Ref} onClick={back13Click}/>
          <div className="page" ref={text13Ref}>
            <text className="textPage">13/13</text>
          </div>
          <Forward className="forward" ref={forward13bRef}/>
        </div>
      </div>
    </>
  );
}

