import "./index.css"
import "./Welcome.css"
import { useState } from "react"
import Arrow from "./Arrow"

function Welcome() {

    const [animate, setAnimate] = useState(true)

    setTimeout(() => {
        setAnimate(false)
    }, 1000)

    return (
        <div className={`welcome-container ${animate ? "fly-in" : ""}`}>
            <div className="flex-item">
                <p className="beeg">Hello!</p>
                <p className="smol">Thanks for visiting.</p>
            </div>
            <div className="flex-item">
                <Arrow animationDirection={true} />
            </div>
        </div>
    )
}

export default Welcome