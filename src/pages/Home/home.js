import React from "react";
import { useViewport } from "../../viewportContext";

export default function Home() {
  const { width, height } = useViewport();
  return (
    <>
      <span>width is: {width} </span>
      <span>height is: {height} </span>
    </>
  );
}
