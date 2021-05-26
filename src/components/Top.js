import Welcome from "./Welcome"
import Projects from "./Projects"
import { Waypoint } from "react-waypoint";

function Top({ animate, hasScrolled }) {

    if (hasScrolled) {
        return (
            <>
                <Projects></Projects>
            </>
        )
    } else {
        return (
            <Welcome animate={animate}></Welcome>
        )
    }
}

export default Top