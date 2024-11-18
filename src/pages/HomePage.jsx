import AboutMe from "../components/AboutMe.jsx";
import IntroAboutMe from "../components/IntroAboutMe.jsx";
import MyResume from "../components/MyResume.jsx";
import Navbar from "../navBar/navBar";
import '../style/HomePage.scss'

export default function HomePage() {
    return <>
    <Navbar />
    <IntroAboutMe />
    <AboutMe />
    <MyResume />
    </>
}