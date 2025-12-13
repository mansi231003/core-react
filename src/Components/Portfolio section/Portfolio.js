import "./Portfolio.css"
// import PortfolioImg from "../PortfolioImg/PortfolioImg"
import { Card2 } from "../Cards/Cards"
export default function Portfolio(){
    return(
        <>
        <div className="portfolio-section">
            <h1 className="heading">Portfolio</h1>
            <div className="portfolio-bar">
                <div className="bar-item">All</div>
                <div className="bar-item">Website Design</div>
                <div className="bar-item">App Mobile Design</div>
                <div className="bar-item">App Desktop</div>
                <div className="bar-item">Braiding</div>
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