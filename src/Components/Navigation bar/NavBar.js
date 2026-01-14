import { useEffect, useState } from "react"
import { XCircle } from "lucide-react";
import Button from "../Buttons/Buttons"
import "./NavBar.css"

export default function NavBar() {

    const [stickyBar, setStickyBar] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [section, setSection] = useState("home");

    function sectionActive(section) {
        setSection(section);

    }

    useEffect(() => {
        const move = (e) => {
            setCursor({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move)

    }, [])


    useEffect(() => {

        window.addEventListener('scroll', () => {
        
            const currentScroll = window.scrollY;
            if (currentScroll == 0) {
                setStickyBar(false)

            }
            if (currentScroll > 900) {
                setStickyBar(true)
            }

        })

    }, [])

    function toggleSidebar() {
        if (!sidebarOpen) {
            setSidebarOpen(true)
            document.body.style.overflow = "hidden";

        }
        else {
            setSidebarOpen(false);
            document.body.style.overflow = "auto";

        }
    }


    useEffect(() => {

        const items = document.querySelectorAll(".sidebar-menu .nav-link");
        items.forEach(item => {
            let text = item.textContent;
            let firstLetter = text.charAt(0);
            let restLetters = text.slice(1);
            item.innerHTML = `<span class="first-letter">${firstLetter}</span>${restLetters}`;

        })

    }, [])

    return (
        <>
            <div className={`sidebar-container ${sidebarOpen ? "active" : ""}`}>
                <ul className={`sidebar-menu ${sidebarOpen ? "active" : ""}`}>

                    <div className="logo-container nav-item"><img src="LOGO.png" /><XCircle onClick={toggleSidebar} size={28} color="var(--primary-color)" /></div>
                    <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#service">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="#about">About me</a></li>
                    <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact me</a></li>
                    <li className="hire-button"><Button variant='primary'>Hire Me</Button></li>

                </ul>
                <div className="sidebar-overlay " onClick={toggleSidebar}><div className="cursor-style" style={{ left: cursor.x, top: cursor.y }}><span>X</span></div></div>

            </div>

            <div className={`navbar-container ${stickyBar ? "sticky" : "position"}`}>
                <div className="sidebar-button" onClick={toggleSidebar}><svg width="29" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 12H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 6H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 18H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </div>
                <div className="logo-container"><img src="LOGO.png" /></div>
                <div className="navbar-wrap">
                    <ul className="navbar-menu">
                        <li className="nav-item" onClick={() => { sectionActive("home") }}><a className={`ss nav-link ${section == "home" ? "orange-color" : ""}`} href="#home">Home</a></li>
                        <li className="nav-item" onClick={() => { sectionActive("service") }}><a className={`ss nav-link ${section == "service" ? "orange-color" : ""}`} href="#service">Services</a></li>
                        <li className="nav-item" onClick={() => { sectionActive("about") }}><a className={`ss nav-link ${section == "about" ? "orange-color" : ""}`} href="#about">About me</a></li>
                        <li className="nav-item" onClick={() => { sectionActive("portfolio") }}><a className={`ss nav-link ${section == "portfolio" ? "orange-color" : ""}`} href="#portfolio">Portfolio</a></li>
                        <li className="nav-item" onClick={() => { sectionActive("contact") }}><a className={`ss nav-link ${section == "contact" ? "orange-color" : ""}`} href="#contact">Contact me</a></li>
                    </ul>
                </div>
                <Button variant='primary'>Hire Me</Button>
            </div>
        </>
    )
}