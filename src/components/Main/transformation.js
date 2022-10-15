import React from "react";
import "./main.css";

const content = {
  heading: "The\nTransformation",
  description: "While acquisitions can take anywhere from seconds to hours, the “transformation” takes only seconds.\n\nImagine a short burst of sound from an orchestra played through a speaker.  The oscillations of the speaker representing all those superimposed sounds are like the FID described above.\n\nBut when we listen to an orchestra, we can pick out different notes/frequencies even though all the notes are played at the same time.\n\nAnalogously, using math and a computer, we can convert all of the precessions (sounds) from the NMR acquisition into their corresponding frequencies (notes).\n\nThat type of math is called the Fourier Transform of the FID and with it we can see at what slightly different frequencies the nuclei are precessing and how many nuclei are precessing at each of these frequencies.\n\nFrom this information, chemists can  understand the sample's chemical structure.",
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