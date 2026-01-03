import "./ContactMe.css"
import Button from "../Buttons/Buttons"
import { useEffect, useState } from "react"
export default function ContactMe() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const [timeline, setTimeline] = useState("");
    const [projectDetails, setProjectDetails] = useState("");
    const [nameError, setnameError] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [phoneNumberError, setphoneNumberError] = useState(false);
    const [timelineError, settimelineError] = useState(false);
    const [projectDetailsError, setprojectDetailsError] = useState(false);
    const [sending, setSending] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidNumber, setInvalidNumber] = useState(false);


    function validEmail() {
        let emailLower = email.toLocaleLowerCase();
        // console.log(emailLower)
        if (emailLower.length > 0) {
            setInvalidEmail(true)
                   console.log(emailLower.trim(" "));

        }
        if (emailLower.length > 0 && emailLower.includes("@")) {
            let splitAt = emailLower.split("@")
            // setInvalidEmail(true)
            // console.log(splitAt)

            if (splitAt[1].includes(".")) {
                let splitDot = splitAt[1].split(".")
                // console.log(splitDot)

                console.log(splitDot)
                if (splitDot[0].length > 0 && splitDot[1].length > 0) {
                    setInvalidEmail(false)

                    return emailLower;
                }
            }
        }
    }

    function validNumber() {
        let splitNo = phoneNumber.split("");
        for (let i = 0; i <= splitNo.length; i++) {        
        if(splitNo[i]>="a" && splitNo[i]<="z"){           
                setInvalidNumber(true);
                break;

            }
            else{
                setInvalidNumber(false)
            }
        }


    }

    useEffect(() => {
        validEmail();
        setemailError(false)
    }, [email])

    useEffect(() => {
        setnameError(false)
    }, [name])

    useEffect(() => {
        validNumber();
        setphoneNumberError(false)
    }, [phoneNumber])

    useEffect(() => {
        settimelineError(false)
    }, [timeline])

    useEffect(() => {
        setprojectDetailsError(false)
    }, [projectDetails])

    function resetForm() {

        if (name && !invalidEmail) {
            setSending(false);
            setName("");
            setEmail("");
            setNumber("");
            setTimeline("");
            setProjectDetails("")
        }
    }


    function sendForm(event) {


        event.preventDefault();

        if (name && !invalidEmail && email && phoneNumber && timeline && projectDetails) {
            setSending(true);
        }

        if (!name) {
            setnameError(true);
        }
        if (!email) {
            setemailError(true);
        }
        if (!phoneNumber) {
            setphoneNumberError(true)
        }
        if (!timeline) {
            settimelineError(true)
        }
        if (!projectDetails) {
            setprojectDetailsError(true)
        }

        const data = {
            name: name,
            email: email.trim(""),
            phoneNumber: phoneNumber,
            timeline: timeline,
            projectDetails: projectDetails
        }

        console.log(data);
        setTimeout(() => {
            resetForm();

        }, 10000)

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
                                nameError ? <div>Name is required!</div> : ""
                            }
                        </div>
                        <div className="grid">
                            <div className="input-wrap"><input className="input" type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />

                            </div>
                            {
                                emailError ? <div>Email is required!</div> : ""
                            }
                            {
                                invalidEmail ? <div>Invalid email!</div> : ""
                            }
                        </div>
                        <div className="grid">
                            <div className="input-wrap"><input className="input" type="tel" placeholder="Phone Number" maxLength={10} value={phoneNumber} onChange={(e) => { setNumber(e.target.value) }} /></div>
                            {
                                phoneNumberError ? <div>PhoneNumber is required!</div> : ""
                            }
                            {
                                invalidNumber ? <div>Invalid number!</div> : ""
                            }
                        </div>
                        <div className="input-wrap"><select className="input">
                            <option>Service of Interest</option>
                            <option>option2</option>
                        </select></div>
                        <div className="grid">
                            <div className="input-wrap"><input className="input" type="text" value={timeline} placeholder="Timeline" onChange={(e) => { setTimeline(e.target.value) }} /></div>
                            {
                                timelineError ? <div>Timeline is required!</div> : ""
                            }
                        </div>
                        <div className="grid">
                            <div className="input-wrap project-detail"><input className="input" type="text" value={projectDetails} placeholder="Project Details.." onChange={(e) => { setProjectDetails(e.target.value) }} /></div>
                            {
                                projectDetailsError ? <div>Project detail is required!</div> : ""
                            }
                        </div>
                        <div></div>
                        <div className="form-button-container" >{sending ? <div className="flex"><div className="dataSend">Data send successfully..</div><Button variant='primary'>Sending...</Button></div> : <Button variant='secondary' type="submit" onClick={sendForm}>Send</Button>}</div>
                    </form>
                </div>
            </div>
        </>
    )
}