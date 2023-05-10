import "../NavBar/navbar.css";
import { ReactComponent as NMRLogo } from "../../components/NavBar/NMR Logo.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
