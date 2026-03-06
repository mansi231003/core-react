import { useState } from "react";
import {motion} from "motion/react";
import "./Motion.css"
export default function Motion(){
    
// const box = {
//     width: 100,
//     height: 100,
//     backgroundColor: "#ff0088",
//     borderRadius: 5,
// }
    const [move, setMove] = useState(true)
    return(
        
        <>
        <div className="motion">
        <motion.div className="round"/>
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
            
            <motion.button className="button" whileTap={{scale:1.1}} onClick={() => setMove(!move)}>click</motion.button>
            <motion.div className="round 1" initial={{x:0}}transition={{ duration: 1 }}/>
            {move?
        <motion.div className="round 1" initial={{x:0}} animate={{x:0}} transition={{ duration:1}}/>:<motion.div className="boxx 2" animate={{x:700}} transition={{ duration: 1 }}/>}

            
        </div>
        </>
    )
}