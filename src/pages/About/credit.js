import React from "react";
import NavBar from "../../components/NavBar/navbar";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../assets/backArrow.svg";
import { gsap } from "gsap/all";
import Group from "../../components/Group";

export default function Ab() {
  const mainRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const backwardRef = React.useRef(null);

  let navigate = useNavigate();

  React.useEffect(() => {
    gsap.to(mainRef.current, { opacity: 1, duration: 1 });
  });

  const backwardClick = () => {
    let path = "/About/";
    navigate(path);
  };

  return (
    <div className="instrumentation">
      <NavBar></NavBar>
      <div className="navTitle" ref={titleRef}>
        <span>Credits</span>
      </div>
      <div className="instrumentation-main" ref={mainRef}>
        <>
          <div className="header">
            <div id="biglogo" className="head-text big-logo">
              <svg
                width="548"
                height="348"
                viewBox="0 0 137 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="134.281"
                  height="85"
                  fill="#0C0C31"
                  stroke="#C3FA50"
                  stroke-width="2"
                />
                <g clip-path="url(#clip0_1308_1530)">
                  <rect
                    width="104.615"
                    height="72.625"
                    transform="translate(16.6973 6.32227)"
                    fill="#0C0C31"
                  />
                  <path
                    d="M41.3226 30.4589V59.4747H38.5243C38.154 59.4836 37.7863 59.4105 37.448 59.2607C37.1105 59.0844 36.8164 58.8359 36.587 58.5332L21.3468 39.2321C21.3468 40.0881 21.3468 40.9012 21.3468 41.6715V59.4747H16.6973V30.4589H20.1414C20.2816 30.416 20.4316 30.416 20.5719 30.4589L21.0024 30.8869C21.1524 31.0094 21.283 31.1537 21.3899 31.3149L36.7161 50.7443V49.3748C36.7161 48.9041 36.7161 48.4761 36.7161 48.0909V30.4589H41.3226Z"
                    fill="white"
                  />
                  <path
                    d="M121.312 59.4751H116.103C115.677 59.5024 115.252 59.4082 114.878 59.2034C114.505 58.9987 114.197 58.6921 113.993 58.3196L107.449 48.4765C107.285 48.1408 107.012 47.8696 106.674 47.7062C106.273 47.5129 105.828 47.4246 105.383 47.4494H102.8V59.4751H97.1602V28.7047H106.588C108.418 28.6702 110.243 28.8862 112.013 29.3467C113.363 29.6963 114.624 30.3232 115.715 31.1869C116.644 31.9219 117.37 32.879 117.825 33.9687C118.305 35.1059 118.539 36.3305 118.514 37.5635C118.514 38.5526 118.354 39.5352 118.04 40.4737C117.759 41.383 117.322 42.2372 116.748 42.9986C116.149 43.7721 115.421 44.4379 114.596 44.9673C113.7 45.5756 112.711 46.0379 111.668 46.3367C112.037 46.5441 112.383 46.7878 112.702 47.0643C113.034 47.3665 113.324 47.712 113.563 48.0914L121.312 59.4751ZM106.502 43.341C107.464 43.3574 108.422 43.2275 109.344 42.9558C110.102 42.7287 110.805 42.3501 111.41 41.8431C111.912 41.3582 112.308 40.7754 112.573 40.1313C112.837 39.4488 112.968 38.7227 112.96 37.9915C113.008 37.313 112.892 36.6329 112.622 36.0078C112.353 35.3826 111.937 34.8303 111.41 34.3966C110.027 33.4395 108.355 32.986 106.674 33.1127H102.8V43.341H106.502Z"
                    fill="white"
                  />
                  <path
                    d="M55.0556 56.2227H41.3223V59.4752H55.0556V56.2227Z"
                    fill="white"
                  />
                  <path
                    d="M101.422 56.2227H87.6885V59.4752H101.422V56.2227Z"
                    fill="white"
                  />
                  <path
                    d="M59.3177 36.8357L59.4038 39.1467L55.1417 59.4748L51.5254 58.6189L57.079 32.1709L59.3177 36.8357Z"
                    fill="white"
                  />
                  <path
                    d="M59.1889 25.0246L58.8875 23.8691L56.9502 32.5995L65.6035 68.5483L69.2629 67.4356L59.1889 25.0246Z"
                    fill="white"
                  />
                  <path
                    d="M68.1004 78.9473L67.5407 76.6363L65.6465 68.719L75.29 6.32227L77.1412 21.3437L68.1004 78.9473Z"
                    fill="white"
                  />
                  <path
                    d="M89.1526 59.475L89.8415 59.0899L75.2901 6.32227L74.7305 17.5776L85.3641 59.475H89.1526Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1308_1530">
                    <rect
                      width="104.615"
                      height="72.625"
                      fill="white"
                      transform="translate(16.6973 6.32227)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="spectrum-main-desc credit-desc">
            <Group
              desc="Project Director/ Founder"
              link={[["Dr. Diana Cermak,", "Professor of Chemistry"]]}
              sub="Dr. Cermak has been working on this project since 2014. She had the all-important initial vision of bringing the old instrument back to life and the tenacity and patience to find the resources and people necessary to make it all happen. She wrote the overwhelming majority of content, including the NMR story - how it works and what the data tells us. See the “About this Project” section for the full story."
            ></Group>
            <Group
              desc="Designer/ Project Manager"
              link={[
                [
                  "Kelly Fisk, class of ‘22",
                  "Major: (self-designed) Graphic & Interactive Design for Art & Business",
                ],
              ]}
              sub="For her senior capstone project, Kelly took everything that Philip and Dr. Cermak had built and designed a clean, modern user interface prioritizing the best user experience for various audiences and objectives. She also worked closely with Dr. Cermak to build and refine the technical prose and illustrations. She conducted user experience research and testing along the way, reported research findings, and developed countless design iterations to get to what we have before us today. She also recruited and managed all of the computer science students in an Agile work environment."
              //   sub="Major: (self-designed) Graphic & Interactive Design for Art & Business"
            ></Group>
            <Group
              desc="Hardware and Light Design/Phase I Programming"
              link={[
                ["Philip Griffin, class of ‘20", "Majors: Chemistry & Physics"],
              ]}
              sub="Philip worked closely with Dr. Cermak to bring her ideas to life by designing the overall strategy to use a Raspberry Pi, HTML & CSS to display all of the NMR written material on a touchscreen display. He also designed and implemented the hard wiring of RGB LED strips within the instrument and wrote the Python code necessary to communicate the lighting commands from the display to the lights. Philip’s role in getting all of the moving parts of this project off the ground cannot be understated.

                Philip would like to specifically thank Alex Fluegel, class of ‘19, for helping to get the Pi, website, and display up and running initially, as well as advising on how best to use these components. “I could not have gotten as far as I did without his help.”"
            ></Group>
            <Group
              desc="Phase II Programming Lead"
              link={[
                [
                  "An Trieu, class of ‘24",
                  "Major: Computer Science",
                  "Minors: Music Theory/Composition & Graphic Design",
                ],
              ]}
              sub="An has been our lead programmer for the final stages of this project. He led a team of computer science students to update the code into React.js, incorporating and troubleshooting the Python coding used for lighting the RGB strips inside the instrument, and has made himself available for countless resets, updates, and changes over the course of this project. He is also in the process of developing our web version of the project that will be available to audiences near and far."
            />
            <Group
              desc="Additional Programming Support"
              link={[
                [
                  "Thy Le, class of ‘24",
                  "Majors: Biochemistry & Computer Science",
                ],
                ["Jessi Quach, class of '24", "Major: Computer Science"],
                ["Adam Brohl, class of ‘24", "Major: Computer Science"],
              ]}
            />
            <Group
              desc="Illustrations"
              link={[
                [
                  "James Adamson, class of ‘23",
                  "Major: Studio Art",
                  "Minor: Graphic Design & Computer Science",
                ],
                [
                  "Kelly Fisk, class of ‘22",
                  "Major: Graphic & Interactive Design for Art & Business (self-designed)",
                ],
              ]}
            />
            <Group
              desc={["Course Research", "Content Contributors"]}
              link={[
                ["Dr. Helen Hoyt", "Professor of Chemistry"],
                [
                  "Dr. Katherine Adelsberger",
                  "Professor of Environmental Studies",
                ],
                ["Dr. Andrew Mehl", "Professor of Chemistry & Biochemistry"],
              ]}
            />
          </div>
        </>
        <Back
          ref={backwardRef}
          className="spectrum-back"
          onClick={backwardClick}
        ></Back>
      </div>
    </div>
  );
}
