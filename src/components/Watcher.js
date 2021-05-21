import { Waypoint } from "react-waypoint"

function Watcher({ hasScrolled, callBack }) {
    if (!hasScrolled) {
        return (
            <Waypoint onEnter={callBack} />
        )
    } else {
        return null
    }
}

export default Watcher