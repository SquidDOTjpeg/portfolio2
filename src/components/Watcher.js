import { Waypoint } from "react-waypoint"

function Watcher({ active, onEnter, onLeave }) {
    if (active) {
        return (
            <Waypoint onEnter={onEnter} onLeave={onLeave} />
        )
    } else {
        return null
    }
}

export default Watcher