import "../NavBar/navbar.css";
import { ReactComponent as NMRLogo } from "../../components/NavBar/NMR Logo.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div class="navBar">
        <div className="sectionLogo">
          <Link to="/">
            <NMRLogo className="logo" />
          </Link>
        </div>

        <div className="sectionTitle"></div>
        <div className="sectionNavigation">
            
          <div className="sectionText">
            <div class="nmrFundamentals">
              <Link to="/NMRFundamentals" className="navLink">
                <span className="navText">NMR</span>
                <br></br>
                <span className="navText">Fundamentals</span>
              </Link>
            </div>
          </div>

          <div className="sectionText">
            <div className="courseUsage">
              <Link to="/CourseUsage" className="navLink">
                <span className="navText">Course</span>
                <br></br>
                <span className="navText">Usage</span>
              </Link>
            </div>
          </div>

          <div className="sectionText">
            <div class="facultyResearch">
              <Link to="/FacultyResearch" className="navLink">
                <span className="navText">Faculty</span>
                <br></br>
                <span className="navText">Research</span>
              </Link>
            </div>
          </div>
          <div className="sectionText">
            <div class="facultyResearch">
              <Link to="/FacultyResearch" className="navLink">
                <span className="navText">Faculty</span>
                <br></br>
                <span className="navText">Research</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
