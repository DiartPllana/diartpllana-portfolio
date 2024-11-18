import React from "react";

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
          <p></p>
          <div className="boxSkills"></div>
        </div>
      </div>
    </>
  );
}
