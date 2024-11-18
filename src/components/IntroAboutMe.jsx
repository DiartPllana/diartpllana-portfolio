import myImage from "../assets/DiartPllana.png";

export default function IntroAboutMe() {
  return (
    <>
      <div className="intro">
        <div className="aboutMe">
          <p>HELLO I AM</p>
          <h1> Diart Pllana</h1>
          <span className="myJob">Front End Developer</span>
          <div className="buttons">
            <button className="generalButton">Hire Me!</button>
            <button className="generalButton">My Work</button>
          </div>
        </div>
        <div className="myImage">
          <img src={myImage} alt="" />
        </div>
      </div>
    </>
  );
}
