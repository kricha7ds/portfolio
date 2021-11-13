import "./about.scss"

export default function About() {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/headshot.jpg" alt="" />
                </div>
                <div className="caption">
                    Some text in here.
                </div>
            </div>
            <div className="right">
                <p>Other text about me would go here.</p>
            </div>
        </div>
    )
}