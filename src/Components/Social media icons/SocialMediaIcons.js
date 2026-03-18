import {motion} from "motion/react";
import "./SocialIcons.css"
export default function SocialMediaIcons({children,className,variant}){
     let style = "";
    switch (variant) {
        case "solid":
            style = "solid-color";
            break;
        case "gradient":
            style = "gradient-color";
            break;
        default:
            style = "default";
            break;

    }
    return(
        <>
          <div className={`${style} app-wrapper`}><motion.div initial={{left:["0%","-144%","-100%"]}} whileHover={{left:["-100%","44%","0%"]}}  transition={{duration:0.3}} className="logo-animation"><div className="logo-effect">{children}</div>
                        <div className="logo-effect">{children}</div></motion.div>
                        </div>
        </>
    )
}