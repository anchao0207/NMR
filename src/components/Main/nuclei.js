import React from "react";
import "./main.css";

const content = {
  heading: "The\nNuclei",
  description: "Only certain elements can be observed by NMR spectroscopy.\n\nAn isotope of an element is NMR active if it has a 'nuclear spin' magnitude greater than 1/2.\n\nThis spin is a weird, spooky, quantum mechanical property, and it is not the physical spinning of a particle.  The mathematics of the quantum mechanical spin number and a physically spinning object are very similar, which is how it got its name.\n\nWhen a nucleus with a non-zero nuclear spin is placed in a magnetic field, it precesses around the magnetic field axis just like how a gyroscope or a top precesses under the influence of gravity.  This precession of the nucleus can be detected as radio waves.\n\nAll nuclei of a given isotope precess at the exact same rate when in the exact same magnetic field, and hence are detected at the same radio frequency.  But in a molecule, the magnetic field can and does vary by a 'small' amount depending on the chemical bonding and environment.\n\nThis small variation in the frequency of the radio signals is called 'chemical shift', and gives us a useful tool to peer inside a molecule.",
};

const MainBody = (props) => {
  return (
    <div className="container">
      <div className="header">
        <div className="head-text">{props.heading}</div>
      </div>
      <div className="description">
        <div className="decs-text">
            <p>
            {props.description}
            </p>
        </div>
      </div>
    </div>
  );
};

const BodyFirstPage = () => {
  return <>{MainBody(content)}</>;
};
export default BodyFirstPage;