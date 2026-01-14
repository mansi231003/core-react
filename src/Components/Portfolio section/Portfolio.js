import "./Portfolio.css"
// import PortfolioImg from "../PortfolioImg/PortfolioImg"
import { Card2 } from "../Cards/Cards"
export default function Portfolio(){
    return(
        <>
        <div id="portfolio" className="portfolio-section section">
            <h1 className="heading">Portfolio</h1>
            <div className="portfolio-bar">
                <div className="bar-item bg-orange"><div className="animation"><span className="effect">All</span><span className="effect">All</span></div></div>
                <div className="bar-item"><div className="animation"><span className="effect">App Mobile Design</span><span className="effect">App Mobile Design</span></div></div>
                <div className="bar-item"><div className="animation"><span className="effect">App Desktop</span><span className="effect">App Desktop</span></div></div>
                <div className="bar-item"><div className="animation"><span className="effect">Braiding</span><span className="effect">Braiding</span></div></div>
                <div className="bar-item"><div className="animation"><span className="effect">Website Design</span><span className="effect">Website Design</span></div></div>
            </div>
            <div className="scroll-bar">
            <div className="portfolio-img-section">
                <Card2 image="zalwa-img.png"/>
                <Card2 image="mountain.png"/>
                <Card2 image="portfolio-img3.png"/>
                <Card2 image="mountain.png"/>
                <Card2 image="zalwa-img.png"/>
                <Card2 image="portfolio-img3.png"/>
                <Card2 image="zalwa-img.png"/>
                <Card2 image="portfolio-img3.png"/>
                <Card2 image="mountain.png"/>
            </div>
            </div>
        </div>
        </>
    )
}