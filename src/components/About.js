import "./About.css"
import "./index.css"
import List from "./List"
import arrow from "../assets/Arrow.png"
import Arrow from "./Arrow"
import { useEffect, useState } from "react"


function About() {
    // const [arrowTimeOut, setArrowTimeOut] = useState(1000)

    return (
        <div className="default-container" id="test">
            <div>
                <Arrow length={3} delay={3} animationDirection={0} />
            </div>
            <div className="avatar test"></div>
            <div className="test2">
                <p>I'm Anthony, a full stack web developer. I have experience coding in the MERN stack</p>
                <List listItems={[1, 2, 3, 4]} />
            </div>
        </div>
    )
}


export default About