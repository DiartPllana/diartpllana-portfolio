import React from "react";
import HtmlCssSkill from '../assets/skill1.png'
import JavaScript from '../assets/skill2.png'
import ReactSkill from '../assets/skill3.png'
import WordPress from '../assets/skill4.png'

export default function AboutMe() {
  const handleButtonClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/diart-pllana-52627b278/";
  };

  return (
    <>
      <div className="aboutMyData">
        <div className="myData">
          <h1>About Me</h1>
          <p>I like my customers to be happy</p>
          <button className="generalButton" onClick={handleButtonClick}>
            Linkedin
          </button>
          <div className="tableData">
            <div className="personalData">
              <span>Age:</span>
              <div className="myInfo">
                <p>16</p>
              </div>
            </div>

            <div className="personalData dataBG">
              <span>Country:</span>
              <div className="myInfo">
                <p>Kosovo</p>
              </div>
            </div>

            <div className="personalData">
              <span>Address:</span>
              <div className="myInfo">
                <p>Ajet Mustaf Pllana</p>
              </div>
            </div>

            <div className="personalData dataBG">
              <span>E-mail:</span>
              <div className="myInfo">
                <p>diartpllana4@gmail.com</p>
              </div>
            </div>

            <div className="personalData">
              <span>Phone:</span>
              <div className="myInfo">
                <p>+383 45 240 809</p>
              </div>
            </div>

            <div className="personalData dataBG">
              <span>Freelance:</span>
              <div className="myInfo">
                <p>Available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mySkills">
          <p>
            I am passionate about creating engaging digital experiences and
            enjoy tackling new challenges. When I'm not working, I love
            exploring new technologies and spending time outdoors.
          </p>
          <div className="boxSkills">
            <div className="skill">
              <img src={HtmlCssSkill} alt="" />
              <h3>85%</h3>
              <span>HTML/CSS</span>
            </div>

            <div className="skill">
              <img src={JavaScript} alt="" />
              <h3>90%</h3>
              <span>JavaScript</span>
            </div>

            <div className="skill">
              <img src={ReactSkill} alt="" />
              <h3>70%</h3>
              <span>React</span>
            </div>

            <div className="skill">
              <img src={WordPress} alt="" />
              <h3>30%</h3>
              <span>WordPress</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
