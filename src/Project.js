import NavBar from "./Components/Navigation bar/NavBar";
import HeroSection from "./Components/Hero section/HeroSection";
import ServiceSection from "./Components/Service section/ServiceSection";
import Aboutme from "./Components/About me/AboutMe";
import Portfolio from "./Components/Portfolio section/Portfolio";
import ContactMe from "./Components/Contact me/ContactMe";
import Footer from "./Components/Footer/Footer";

export default function Project(){
    return(
        <>
        <div className="black-color">
        <NavBar/>
        <HeroSection/>
        <ServiceSection/>
        <Aboutme/>
        <Portfolio/>
        <ContactMe/>
        <Footer/>
        </div>
        </>
    )
}