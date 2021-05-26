import "./index.css"
import "./Welcome.css"
import arrow from "../assets/Arrow.png"

function Welcome({ animate }) {
    return (
        <div className={`welcome-container ${animate ? "fly-in" : ""}`}>
            <div className="flex-item">
                <p className="beeg">Hello!</p>
                <p className="smol">Thanks for visiting.</p>
            </div>
            <div className="flex-item">
                <img src={arrow} alt="arrow" className="arrow" />
            </div>
        </div>
    )
}

export default Welcome