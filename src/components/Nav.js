import "./Nav.css"

function Nav() {
    return (
        <nav className="navbar">
            <div className="flex">
                <img src="dont have one yet" alt="AP" className="logo navbar-left" />
                <div className="spacer"></div>
                <div className="navbar-right">
                    <button className="navbar-links">Projects</button>
                    <button className="navbar-links">Contact</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav