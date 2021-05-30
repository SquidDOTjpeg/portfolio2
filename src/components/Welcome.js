import "./index.css"
import "./Welcome.css"
import Arrow from "./Arrow"

function Welcome({ animate }) {
    return (
        <div className={`welcome-container ${animate ? "fly-in" : ""}`}>
            <div className="flex-item">
                <p className="beeg">Hello!</p>
                <p className="smol">Thanks for visiting.</p>
            </div>
            <div className="flex-item">
                <Arrow animation={true} />
            </div>
        </div>
    )
}

export default Welcome