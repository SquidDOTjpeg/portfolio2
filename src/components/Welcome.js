import "./Welcome.css"
import arrow from "../assets/Arrow.png"
 
function Welcome() {
    return (
        <div className="welcome-container">
            <div className="flex-item">
                <p className="beeg">Hello!</p>
                <p className="smol">Thanks for visiting.</p>
            </div>
            <div className="flex-item">
                <img src={arrow} alt="arrow" className="arrow"/>
            </div>
        </div>
    )
}

export default Welcome