
import { useState } from "react";
import {motion} from "motion/react";
import "./Motion.css"
// import { AnimatePresence, motion } from "motion/react";
import { animate } from "motion";
export default function Motion(){
   
    const [move, setMove] = useState(true)
    const [movement, setMovement] = useState(true)

    return(
        
        <>
        <div className="motion">
             {/* <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={box}
                        key="box"
                    />
                ) : null}
            </AnimatePresence> */}
        <motion.div className="round" initial={{opacity:0}} animate={{opacity:1}}/>
       <motion.div
            className="boxx"
            // whileHover={{scale:1.1}}
            // whileTap={{scale:2}}
            initial={{x:400}}
            animate={{x:[0,300]}}
             transition={{ duration: 4,times:[0,0.5,1] }}
            // onHoverStart={()=>console.log("kjh")}
        />
        
        </div>
        <div className="motion">
            <motion.button className="button" whileTap={{scale:1.1}} onClick={() => setMovement(!movement)}>clickkk</motion.button>
            
            <motion.button className="button" whileTap={{scale:1.1}} onClick={() => setMove(!move)}>click</motion.button>
     {move?(
 <motion.div className="round 1" animate={{x:0}} />):movement?
    <motion.div className="boxx 2"  animate={{x:500}}/>:<motion.div className="boxx 5"  animate={{x:1000}}/>
 }


{/* {move?
<motion.div className="round" animate={{x:500}}/>:null} */}
{/* <motion.div className="round" animate={{x:move?500:0}}/> */}
            
        </div>
        </>
    )
}