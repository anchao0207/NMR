// Importing the required CSS file for the NavBar
import "../NavBar/navbar.css";

// Importing the NMRLogo SVG component
import { ReactComponent as NMRLogo } from "../../components/NavBar/NMR Logo.svg";

// Importing the required components from react-router-dom
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

// Defining the NavBar component
export default function NavBar() {
  return (
    <>
      <div class="navBar">
        <div className="sectionLogo">
          {/* Linking the NMRLogo to the homepage */}
          <Link to="/">
            <NMRLogo className="logo" />
          </Link>
        </div>

        <div className="sectionTitle"></div>
        <div className="sectionNavigation">
          <div className="sectionText">
            <div class="nmrFundamentals">
              {/* Creating a NavLink for the NMRFundamentals page */}
              <NavLink
                to="/NMRFundamentals"
                className={({ isActive }) => {
                  return "navLink " + (isActive ? "selected" : null);
                }}
              >
                <span className="navText">NMR</span>
                <br></br>
                <span className="navText">Fundamentals</span>
              </NavLink>
            </div>
          </div>

          <div className="sectionText">
            <div className="courseUsage">
              {/* Creating a NavLink for the CourseUsage page */}
              <NavLink
                to={"/CourseUsage"}
                className={({ isActive }) => {
                  return "navLink " + (isActive ? "selected" : null);
                }}
              >
                <span className="navText">Course</span>
                <br></br>
                <span className="navText">Usage</span>
              </NavLink>
            </div>
          </div>

          <div className="sectionText">
            <div class="facultyResearch">
              {/* Creating a NavLink for the FacultyResearch page */}
              <NavLink
                to="/FacultyResearch"
                className={({ isActive }) => {
                  return "navLink " + (isActive ? "selected" : null);
                }}
              >
                <span className="navText">Faculty</span>
                <br></br>
                <span className="navText">Research</span>
              </NavLink>
            </div>
          </div>
          <div className="sectionText">
            <div class="about">
              {/* Creating a NavLink for the About page */}
              <NavLink
                to="/About"
                className={({ isActive }) => {
                  return "navLink " + (isActive ? "selected" : null);
                }}
              >
                <span className="navText">About</span>
                <br></br>
                <span className="navText">this Project</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}