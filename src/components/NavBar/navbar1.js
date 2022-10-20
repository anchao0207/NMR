import "../NavBar/navbar.css";
import { ReactComponent as NMRLogo } from "../../components/NavBar/NMR Logo.svg";

export default function NavBar() {
    return (
        <>
        <div className = "navBar">
            <div className = "sectionLogo">
                <a href="http://localhost:3000/">
                    <NMRLogo className = "logo" />
                </a>
            </div>
            
            <div className = "sectionTitle"></div>

            <div className = "sectionText1">
                <div className = "nmrFundamentals">
                    <a href="http://localhost:3000/NMRFundamentals" className="navLink">
                    <span className = "navText" id = "t1">NMR</span>
                    <br></br>
                    <span className = "navText" id = "t2">Fundamentals</span>
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
                <div className = "facultyResearch">
                    <a href="http://localhost:3000/FacultyResearch" className="navLink">
                    <span className = "navText">Faculty</span>
                    <br></br>
                    <span className = "navText">Research</span>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}