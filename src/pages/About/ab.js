import React from "react";
import NavBar from "../../components/NavBar/navbar";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../assets/backArrow.svg";
import { gsap } from "gsap/all";

export default function Ab() {
  const content = {
    heading: "About this\nProject",
    desc1: "by Dr. Diana Cermak",
    desc2:
      // eslint-disable-next-line no-multi-str
      "The seed for this project was planted in 2014, soon after we were notified that our National Science Foundation proposal for a new NMR spectrometer would be funded. Once our new instrument was delivered, our old one would become a piece of scrap metal…unless it could somehow be given a new life.\n\n\
I have been taking my Advanced Organic Chemistry students on a tour of the USDA-ARS Research Lab in Peoria, Illinois for many years, and one stop on our tour is always the NMR facility.  Dr. Karl Vermillion, the lab’s NMR specialist, has a display of an old NMR spectrometer that is cut open to show the inner workings of the instrument, and this stop is always a highlight for our students—what is actually INSIDE the metal can that is the NMR spectrometer?\n\n\
So, instead of sending our instrument away for scrap, I knew exactly what I wanted to do with it—cut it open and make our OWN display, but take it one step further and make it interactive.  I knew exactly what I wanted—a touch-screen display that would trigger lighting inside the instrument to guide the audience through all of the parts that make it an NMR spectrometer.\n\n\
The Dean of the College in 2014, Dr. Laura Behling, approved our request to begin the project by cutting open our old NMR spectrometer. My husband, Steven Cermak, and I hauled our old instrument to Greg Akerman in Peoria who had cut open the USDA NMR spectrometer. Greg cut open ours and we hauled it back to Knox, where it sat in the basement of the Chemistry wing in SMC (for years), waiting for its new life.\n\n\
I knew I could not take on this project by myself, so I had to find a team to help me build my vision.  Along came Philip Griffin, a Chemistry and Physics double-major who took Organic Chemistry with me in the Fall and Winter Terms of the 2018-19 academic year.  Philip took great interest in NMR Spectroscopy when we covered it in class, and I thought he might be the right student to bring onto this project. Boy, was I right!  Philip came on to the project in 2019 and built a prototype with a touch screen display, powered by a Raspberry Pi that activated RGB light strips with electrical wiring and a variety of programming languages. Incredible progress! Then COVID-19 hit and the project came to a brief halt.\n\n\
The SMC A-core renovation was happening around this same time, and, with a little prodding of the architects in charge of the project, a new home for the NMR spectrometer was designed. The NMR was (literally) dusted off, hauled out of the SMC basement, and hoisted back onto its legs in its permanent location here, outside of the SMC Library.\n\n\
Next came the collaboration with Kelly Fisk, our design expert. Kelly came onto the project in 2021 and made the final design of the touchscreen interface her senior capstone design project. Kelly synthesized Diana’s vision and Philip’s technical work into an interface that prioritizes the best user experience for a variety of audiences that includes current and prospective students, faculty, and campus visitors. Her ability to take what Philip and I were describing and make it a reality has enhanced this project into something we were absolutely unable to do without her.  I really think it is a BEAUTIFUL design—most definitely NOT something two chemists could create!\n\n\
Finally, we needed a team of computer programmers to put all of these ideas together into one final product, which you see before you today.  From 2022 - 2023, Kelly managed a team of Knox student developers, led by An Trieu to adapt all of my ideas, Philip’s early coding, lighting, and electrical work, and Kelly’s designs into what you see today—an interactive, museum-quality NMR spectroscopy display that can be used in a variety of ways:  as a teaching tool to enhance our Chemistry curriculum; an explanation of one of Chemistry’s most impactful pieces of instrumentation and how the data it provides guides chemists; and a view into how this instrument is used at Knox College in our teaching and research lab.\n\n\
Though it has taken many years to come to fruition, what our team has created is EXACTLY what I envisioned all those years ago—turning our scrap metal into an awesome display of NMR spectroscopy.  Please—enjoy this creation, interact with it, and discover what this incredible piece of technology can do!",
  };

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
        <span>About</span>
      </div>
      <div className="instrumentation-main" ref={mainRef}>
        <>
        <div className="header">
          <div className="head-text big-logo">
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

          <div className="spectrum-main-desc">
            <div className="spectrum-main-desc1">{content.desc1}</div>
            <div className="spectrum-main-desc2">{content.desc2}</div>
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
