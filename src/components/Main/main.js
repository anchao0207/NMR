import React from "react";
import './main.css';

const content={
    heading: "The\nTechnology",
    description:
    "Have you ever had an MRI?\n\nNMR spectroscopy uses the same technology:\n\nA magnetic fields, radio waves, and particular nuclei to study environments at the atomic/molecular level.\n\nMRI specifically looks at hydrogen nuclei in water moelcules in various bodily tissues to produce an image that doctor use to understand what's happening in the body.\n\nNMR spectroscopy uses the same technology that chemists use to produce an NMR spectrum to understand chemical structure.",
} 

const MainBody = (props) =>{
    return (
        <div className="container">
            <div className="column">
                <span className="left-panel">{props.heading}</span>
            </div>
            <div className="column">
                <span className = "right-panel">{props.description}</span>
            </div>
        </div>
    );
};

const BodyFirstPage = () => {
    return (
        <>
            {MainBody(content)}
        </>
            
    );
};
export default BodyFirstPage