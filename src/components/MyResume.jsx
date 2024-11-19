import React from "react";

export default function MyResume() {
  return (
    <div className="myResume" id="myResume">
      <span>Professional Experience</span>
      <h1>My Resume</h1>
      <div className="resumeInfo">
        <div className="resumeData">
          <h2>Education</h2>
          <div className="eduactionDateInfo">
            <span>Present: 2022</span>
            <p>Course</p>
            <div className="infoAboutEducation">
              <h3>Innovation Academy</h3>
              <p>
                Innovation Academy in Vushtrri focuses on developing
                technological skills among students.
              </p>
            </div>
          </div>
          <div className="eduactionDateInfo">
            <span>2023 to 2026</span>
            <p>High School</p>
            <div className="infoAboutEducation">
              <h3>Gjimnazi Eqrem Qabej</h3>
              <p>
                Known for its commitment to providing quality education.
              </p>
            </div>
          </div>
        </div>

        <div className="resumeData">
          <h2>Experience</h2>
          <div className="eduactionDateInfo">
            <span>Present: 2024</span>
            <p>Umi Code</p>
            <div className="infoAboutEducation">
              <h3>Umi Code</h3>
              <p>
                As a new member of the Umi Code team, I am excited to contribute to our mission of delivering exceptional web and application solutions to our clients.
              </p>
            </div>
          </div>
          <div className="eduactionDateInfo">
            <span>Present: 2024</span>
            <p>Freelancer</p>
            <div className="infoAboutEducation">
              <h3>Freelancer</h3>
              <p>
                As a passionate freelance developer, I specialize in creating customized websites and applications that help businesses thrive in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}