import Welcome from "./Welcome"
import Projects from "./Projects"
import { Waypoint } from "react-waypoint";

function Top({ hasScrolled }) {

    if (hasScrolled) {
        return (
            <>
                <Projects></Projects>
            </>
        )
    } else {
        return (
            <Welcome></Welcome>
        )
    }
}

export default Top