import "./Service.css"
import { Card1 } from "../Cards/Cards"
export default function ServiceSection() {
    return (
        <>
            <div className="service-section">
                <h1 className="heading">Services</h1>
                <p className="service-para">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
                <div className="card-section">
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                </div>

            </div>
        </>
    )
}