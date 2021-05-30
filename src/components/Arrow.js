import "./index.css"
import arrow from "../assets/Arrow.png"


function Arrow({ animation }) {
    return (
        <img src={arrow} alt="arrow" className={animation ? "arrow" : "arrow-up"} />
    )
}

export default Arrow