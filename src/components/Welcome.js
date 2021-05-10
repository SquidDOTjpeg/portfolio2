import "./Welcome.css"
import arrow from "../assets/Arrow.png"

function Welcome() {
    return (
        <div className="welcome-container">
            <div className="flex-item">
                <p><span className="beeg">Hello!</span></p>
                <p><span className="smol">Thanks for visiting.</span></p>
            </div>
            <div className="flex-item">
                <img src={arrow} alt="arrow" className="arrow"/>
            </div>
        </div>
    )
}

export default Welcome