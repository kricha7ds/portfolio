import "./navbar.scss"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">explore.</a>
                </div>
                <div classname="right">
                    This is on the right side
                </div>
            </div>
        </div>
    )
}