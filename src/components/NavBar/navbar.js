import "../NavBar/navbar.css";
import { ReactComponent as NMRLogo } from "../../components/NavBar/NMR Logo.svg";

export default function NavBar() {
    return (
        <>
        <div class = "navBar">
            <div className = "sectionLogo">
                <NMRLogo className = "logo"/>
            </div>
            
            <div className = "sectionTitle"></div>

            <div className = "sectionText1">
                <div class = "nmrFundamentals">
                    <span className = "navText" id = "t1">NMR</span>
                    <br></br>
                    <span className = "navText" id = "t2">Fundamentals</span>
                </div>
            </div>

            <div className = "sectionText2">
                <div className = "courseUsage">
                    <span className = "navText" id = "t3">Course</span>
                    <br></br>
                    <span className = "navText" id = "t4">Usage</span>
                </div>
            </div>

            <div className = "sectionText3">
                <div class = "facultyResearch">
                    <span className = "navText" id = "t3">Faculty</span>
                    <br></br>
                    <span className = "navText" id = "t4">Research</span>
                </div>
            </div>
        </div>
        </>
    );
}