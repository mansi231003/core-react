import "./ContactMe.css"
import Button from "../Buttons/Buttons"
import { useState } from "react"
export default function ContactMe() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const [timeline, setTimeline] = useState("");
    const [projectDetails, setProjectDetails] = useState("");
    const [nameError, setnameError] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [sending,setSending]=useState(false);

    function sendForm(event) {

        event.preventDefault();

        if(name&&email){
        setSending(true);
        // setnameError(false);
        // setemailError(false)
            
        }

        if(!name){
            setnameError(true)
        }
        if(!email){
            setemailError(true)
        }

        const data = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            timeline: timeline,
            projectDetails: projectDetails
        }
        console.log(data);
         setTimeout(() => {
            setSending(false);
            setName("");
            setEmail("");
            setNumber("");
            setTimeline("");
            setProjectDetails("")

        }, 3000)

    }


    return (
        <>
            <div className="contact-section">
                <h1 className="heading">Contact me</h1>
                <p className="contact-para">Cultivating Connections: Reach Out and Connect with Me</p>
                <div className="form-container">
                    <form className="form">
                        <div className="grid">
                        <div className="input-wrap"><input className="input" type="text" value={name} placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
                          
                        </div>
                          {
                                nameError ?<div>Name is required!</div>:""
                            }
                            </div>
                            <div className="grid">
                        <div className="input-wrap"><input className="input" type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        
                            </div>
                              {
                                emailError ?<div>Email is required!</div>:""
                            }
                            </div>
                        <div className="input-wrap"><input className="input" type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => { setNumber(e.target.value) }} /></div>
                        <div className="input-wrap"><select className="input">
                            <option>Service of Interest</option>
                            <option>option2</option>
                        </select></div>
                        <div className="input-wrap"><input className="input" type="text" value={timeline} placeholder="Timeline" onChange={(e) => { setTimeline(e.target.value) }} /></div>
                        <div className="input-wrap project-detail"><input className="input" type="text" value={projectDetails} placeholder="Project Details.." onChange={(e) => { setProjectDetails(e.target.value) }} /></div>
                        <div></div>
                        <div className="form-button-container" >{sending?<div className="flex"><Button variant='primary'>Sending...</Button><div className="dataSend">Data send successfully..</div></div>:<Button variant='secondary'type="submit" onClick={sendForm}>Send</Button>}</div>
                    </form>
                </div>
            </div>
        </>
    )
}