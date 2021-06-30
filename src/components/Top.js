import Welcome from "./Welcome"
import Projects from "./Projects"

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