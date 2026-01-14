export default function Skill({image,percentage,label}){
    return(
        <>
          <div className="social-media-icon-container">
                        <div className="social-media-icon" style={{"--percentage":percentage}}>
                              <div className="skill-img" >
                            {image}
                        </div>
                        </div>
                        <div className="icon-percentage-wrap">
                            <div className="percentage">{percentage}%</div>
                            <div>{label}</div>
                        </div>
                    </div>
        </>
    )
}