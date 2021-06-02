import "./index.css"
import "./Arrow.css"
import arrow from "../assets/Arrow.png"
import { useEffect, useState } from "react"


function Arrow({ delay, length, animationDirection }) {
    const [opa, setOpa] = useState(0)


    const arrowOptions = {
        opacity: opa,
        transition: `opacity ${length}s`,
        transitionDelay: `${delay}s`
    }


    setTimeout(() => {
        setOpa(1)
    }, delay * 1000)

    return (
        <img src={arrow} alt="arrow" style={arrowOptions} className={`${animationDirection ? "arrow" : "arrow-up"}`} />
    )

}

export default Arrow