import "../NavBar/navbar.css";
import { ReactComponent as NMRLogo } from "../../components/NavBar/NMR Logo.svg";

export default function NavBar() {
    return (
        <>
        <div class = "navBar">
            <div className = "sectionLogo">
                <a href="http://localhost:3000/">
                    <NMRLogo className = "logo" />
                </a>
            </div>
            
            <div className = "sectionTitle"></div>

            <div className = "sectionText1">
                <div class = "nmrFundamentals">
                    <a href="http://localhost:3000/NMRFundamentals" className="navLink">
                    <span className = "navText">NMR</span>
                    <br></br>
                    <span className = "navText">Fundamentals</span>
                    </a>
                </div>
            </div>

            <div className = "sectionText2">
                <div className = "courseUsage">
                    <a href="http://localhost:3000/CourseUsage" className="navLink">
                    <span className = "navText">Course</span>
                    <br></br>
                    <span className = "navText">Usage</span>
                    </a>
                </div>
            </div>

            <div className = "sectionText3">
                <div class = "facultyResearch">
                    <a href="http://localhost:3000/FacultyResearch" className="navLink">
                    <span className = "navText" id = "t5">Faculty</span>
                    <br></br>
                    <span className = "navText" id = "t6">Research</span>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}