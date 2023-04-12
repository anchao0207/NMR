import React from "react";
import "./main.css";
import MainBody from "../CourseUsage/MainBody"

const content = {
  heading: "The\nTechnology",
  description:
    "Have you ever had an MRI?\n\nNMR spectroscopy uses the same technology.\n\nParticular nuclei, magnetic fields, and radio waves are combined to study the environments at the atomic/molecular level.\n\nAn MRI specifically looks at the hydrogen nuclei in water molecules in your bodily tissues to produce an image that doctors use to understand what’s happening in your body.\n\nNMR spectroscopy uses the same technology.  Chemists use an NMR spectrum to understand the chemical structure of a molecule.",
};

const BodyFirstPage = () => {
  return <>{MainBody(content)}</>;
};
export default BodyFirstPage;
