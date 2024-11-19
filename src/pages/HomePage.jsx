import AboutMe from "../components/AboutMe.jsx";
import ContactMe from "../components/ContactMe.jsx";
import IntroAboutMe from "../components/IntroAboutMe.jsx";
import MyResume from "../components/MyResume.jsx";
import Projects from "../components/Projects.jsx";
import Navbar from "../navBar/navBar";
import '../style/HomePage.scss'

export default function HomePage() {
    return <>
    <Navbar />
    <IntroAboutMe />
    <AboutMe />
    <MyResume />
    <Projects />
    <ContactMe />
    </>
}