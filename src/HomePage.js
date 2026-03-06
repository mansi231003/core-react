import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Partners from "./Components/Partners/Partners";
import { Link } from "react-router-dom";
export default function HomePage(){
    return(
        <>
        <Header/>
        <Profile/>
        <Partners/>
        <Link to='/project'>..project</Link>

        </>
    )
}