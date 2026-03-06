import { useGSAP } from "@gsap/react"
import "./Animations.css"
import gsap from "gsap";
import { useRef, useState } from "react";

export default function Animation() {
    const boxRef=useRef();
    const container=useRef();

    useGSAP(() => {
        gsap.from(".square", {
            y: 250,
            opacity: 0,
            rotate: 720,
            duration: 2,
            delay: 1
        })
    },{scope:container})

    useGSAP(()=>{
        gsap.from(boxRef.current,{
             x: -500,
            opacity: 0,
            rotate: 720,
            duration: 2,
            delay: 1
        })
    })


    const random=gsap.utils.random(-500,500,100)
    const [circle,setCircle]=useState(0);
useGSAP(()=>{
    gsap.to(".circlee",{
        x:circle,
        duration:1,
        delay:0.5
    })
},[circle])
    return (
        <>
            <div className="outer-box">
                <div ref={container} className="box">
                    <div className="circle"></div>
                    <div className="square"></div>
                </div>
                <div className="box">
                    <div className="circle"></div>
                    <div className="square"></div>
                </div>
            </div>
              <div className="outer-box">
                <div className="box">
                    <div className="circle"></div>
                    <div ref={boxRef} className="square"></div>
                </div>
                <div className="box">
                    <div className="circle"></div>
                    <div className="square"></div>
                </div>
            </div>
            <div className="outer-box">
           <div className="box">
            <div onClick={()=>{
                setCircle(random)
                console.log(circle)
            }} className="button">Click</div>
                    <div className="circlee"></div>

           </div>
           </div>
        </>
    )
}