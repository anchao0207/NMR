import React from "react";
import './main.css';

const content={
    heading: "The \n Technology",
    description:
    "Have you ever had an MRI? \n NMR spectroscopy uses the same technology:\nA magnetic fields, radio waves, and particular nuclei to study environments at the atomic/molecular level\nMRI specifically looks at hydrogen nuclei in water moelcules in various bodily tissues to produce an image that doctor use to understand what's happening in the body. <br/>nNMR spectroscopy uses the same technology that chemists use to produce an NMR spectrum to understand chemical structure.",
} 

const MainBody = (props) =>{
    return (
        <div className="container">
            <div className="header">
                {props.heading}
            </div>
            <div className="description">
                {props.description}
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