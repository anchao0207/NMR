import React from "react";
import { Link } from "react-router-dom";
import "./interpretingSpectrum.css";

export default function BasicAspects() {
  const content = {
    heading: "4 Basic\nAspects",
    link1: "SYMMETRY",
    link2: "CHEMICAL SHIFT",
    link3: "INTEGRATION",
    link4: "SPLITTING"
};
  return (
    <>
      <div className="spectrum-main-title">{content.heading}</div>

      <div className="spectrum-main-desc">
        <ol>
<li>

        <Link className="spectrum-main-link spectrum-main-link-text">{content.link1}</Link>
</li>
<li>

        <Link className="spectrum-main-link spectrum-main-link-text">{content.link2}</Link>
</li><li>

        <Link className="spectrum-main-link spectrum-main-link-text">{content.link3}</Link>
</li><li>

        <Link className="spectrum-main-link spectrum-main-link-text">{content.link4}</Link>
</li>
        </ol>
      </div>
    </>
  );
}
