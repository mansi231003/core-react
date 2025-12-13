import Button from "../Buttons/Buttons"
import "./NavBar.css"

export default function NavBar() {
    return (
        <>

         <div className="sidebar-container" >

            <ul className="sidebar-menu">
                 <li className="nav-item sidebar-button"><svg width="29" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 12H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 6H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 18H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </li>
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About me</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Contact me</a></li>

            </ul>
            <div className="sidebar-overlay"></div>

        </div>
            <div className="navbar-container">
                <div className="sidebar-button"><svg width="29" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 12H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 6H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 18H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </div>
                <div className="logo-container"><img src="LOGO.png" /></div>
                <div className="navbar-wrap">
                    <ul className="navbar-menu">
                        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">About me</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact me</a></li>
                    </ul>
                </div>
                <Button variant='primary'>Hire Me</Button>
            </div>
        </>
    )
}