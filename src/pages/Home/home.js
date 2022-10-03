import React from "react";
import { useViewport } from "../../viewportContext";
import Main from "../../components/Main/main"

export default function Home() {
  const { width, height } = useViewport();
  return (
    <>
      <Main></Main>
      <span>width is: {width} </span>
      <span>height is: {height} </span>
    </>
  );
}
