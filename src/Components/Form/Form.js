"use client"
import "./Form.css"
import { useState } from "react";
import React from "react";
// export default function Form() {
//     const [firstName, setfirstName] = useState("");
//     const [lastName, setlastName] = useState("");
//     const [email, setemail] = useState("");
//     const [message, setmessage] = useState("");

//     function submitForm(event) {
//         // if(email.includes()){
//         event.preventDefault();

//         // }
//        const Data = {
//             first_name: firstName,
//             last_name: lastName,
//             email: email,
//             message: message
//         }
//         console.log(Data)
//     }

//     return (
//         <>
//             <form className="form">
//                 <div className="row">
//                     <label htmlFor="firstName">First Name</label>
//                     <input type="text" value={firstName} onInput={(e) => { setfirstName(e.target.value) }} />
//                 </div>
//                 <div className="row">
//                     <label htmlFor="lasttName">Last Name</label>
//                     <input type="text" value={lastName} onInput={(e) => { setlastName(e.target.value) }} />
//                 </div>
//                 <div className="row">
//                     <label htmlFor="email">Email</label>
//                     <input type="email" value={email} onInput={(e) => { setemail(e.target.value) }} />
//                 </div>
//                 <div className="row">
//                     <label htmlFor="message">Message</label>
//                     <textarea typeof="text" value={message} onInput={(e) => { setmessage(e.target.value) }} />
//                 </div>
//                 <div className="row">
//                     <button type="submit" className="button" onClick={submitForm} >Submit</button>
//                 </div>
//             </form>
//         </>
//     )
// }

// class ClassForm extends React.Component{
//     render(){
// //    const [firstName, setfirstName] = useState("");
// //     const [lastName, setlastName] = useState("");
// //     const [email, setemail] = useState("");
// //     const [message, setmessage] = useState("");

//     function submitForm(event) {
//         event.preventDefault();

//     //    const Data = {
//     //         first_name: firstName,
//     //         last_name: lastName,
//     //         email: email,
//     //         message: message
//     //     }
//         console.log("Data")
//     }
//         return(
//             <>
//              <form className="form">
//                 <div className="row">
//                     <label htmlFor="firstName">First Name</label>
//                     <input type="text"  />
//                 </div>
//                 <div className="row">
//                     <label htmlFor="lasttName">Last Name</label>
//                     <input type="text"  />
//                 </div>
//                 <div className="row">
//                     <label htmlFor="email">Email</label>
//                     <input type="email"/>
//                 </div>
//                 <div className="row">
//                     <label htmlFor="message">Message</label>
//                     <textarea typeof="text"   />
//                 </div>
//                 <div className="row">
//                     <button type="submit" className="button" onClick={submitForm} >Submit</button>
//                 </div>
//             </form>
//             </>
//         )
//     }
// }
class ClassForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.increase=this.increase.bind(this);
    }

    increase() {
        this.setState((prevState)=>{
            return{
            counter:prevState.counter+1
            }
        })
    }


    render() {
        const { counter } = this.state;
        return (
            <>
                <div>counter{counter}</div>
                <button onClick={this.increase}>increase</button>
            </>
        )
    }
}
export { ClassForm };