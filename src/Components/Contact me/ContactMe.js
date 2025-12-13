import "./ContactMe.css"
import Button from "../Buttons/Buttons"
export default function ContactMe() {
    return (
        <>
            <div className="contact-section">
                <h1 className="heading">Contact me</h1>
                <p className="contact-para">Cultivating Connections: Reach Out and Connect with Me</p>
                <div className="form-container">
                    <form className="form">
                        <div className="input-wrap"><input className="input" type="text" placeholder="Name" /></div>
                        <div className="input-wrap"><input className="input" type="email" placeholder="Email" /></div>
                        <div className="input-wrap"><input className="input" type="tel" placeholder="Phone Number" /></div>
                        <div className="input-wrap"><input className="input" type="text" placeholder="Service Of Interest" /><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 8.5L12 15.5L5 8.5" stroke="#959595" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                        <div className="input-wrap"><input className="input" type="text" placeholder="Timeline" /></div>
                        <div className="input-wrap project-detail"><input className="input" type="text" placeholder="Project Details.." /></div>
                        <div></div>
                        <div className="form-button-container"><Button variant='secondary'>Send</Button></div>
                    </form>
                </div>
            </div>
        </>
    )
}