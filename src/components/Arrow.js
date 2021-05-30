import "./index.css"
import "./Arrow.css"
import arrow from "../assets/Arrow.png"
import { useState } from "react"


function Arrow({ show, animationDirection }) {
    const [fade, setFade] = useState(true)

    setTimeout(() => {
        setFade(false)
    }, show)


    return (
        <img src={arrow} alt="arrow" className={`${fade ? "arrow-fade" : ""} ${animationDirection ? "arrow" : "arrow-up"}`} />
    )

}

export default Arrow