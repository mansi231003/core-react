"use client"
import "./Buttons.css"

export default function Button({ children,className, variant}) {
    let style = "";
    switch (variant) {
        case "primary":
            style = "primary-button";
            break;
        case "secondary":
            style = "secondary-button";
            break;
        default:
            style = "default-button";
            break;

    }
    return (
        <>
            <div className={`${style} ${className}`}>{children}</div>
        </>
    )
}