import React from "react";
import myImage from "../assets/DiartPllana.png";

export default function IntroAboutMe({ scrollToSection }) {
  const handleLinkClick = (section) => {
    if (scrollToSection) {
      scrollToSection(section);
    } else {
      console.error("scrollToSection is not defined");
    }
  };

  return (
    <div className="intro" id="homeSection">
      <div className="aboutMe">
        <p>HELLO I AM</p>
        <h1>Diart Pllana</h1>
        <span className="myJob">Front End Developer</span>
        <div className="buttons">
          <a href="#aboutMeSection">
            <button
              className="generalButton"
              onClick={() => handleLinkClick("aboutMeSection")}
            >
              Hire Me!
            </button>
          </a>
          <a href="#myProject">
            <button
              className="generalButton"
              onClick={() => handleLinkClick("myProject")}
            >
              My Work
            </button>
          </a>
        </div>
      </div>
      <div className="myImage">
        <img src={myImage} alt="Diart Pllana" />
      </div>
    </div>
  );
}
