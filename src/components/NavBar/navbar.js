import "../NavBar/navbar.css";
import { ReactComponent as NMRLogo } from "../../components/NavBar/NMR Logo.svg";

export default function NavBar() {
    return (
        <>
        <head>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
            </style>
        </head>
        <div class = "navBar">
            <NMRLogo class = "logo"/>
            <div class = "nmrFundamentals">
                <span class = "navText" id = "t1">NMR</span>
                <br></br>
                <span class = "navText" id = "t2">Fundamentals</span>
            </div>
            <div class = "courseUsage">
                <span class = "navText" id = "t3">Course</span>
                <br></br>
                <span class = "navText" id = "t4">Usage</span>
            </div>
            <div class = "facultyResearch">
                <span class = "navText" id = "t3">Faculty</span>
                <br></br>
                <span class = "navText" id = "t4">Research</span>
            </div>
        </div>
        </>
    );
}