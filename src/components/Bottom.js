import About from "./About"
import Contact from "./Contact"

function Bottom({ hasScrolled }) {

    if (hasScrolled) {
        return (
            <Contact></Contact>
        )
    } else {
        return (
            <About></About>
        )
    }
}

export default Bottom