import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <img src="assets/wonderland.png" alt=""/>
            <div className="primary-text-on-image">
                <h1>Katherine Richards</h1>
                <h2>Junior<span></span></h2>
            </div>
            <div className="credit-text-on-image">
                <p className="credit">photo by <span><a href="https://www.pexels.com/@blooddrainer">Anton Atanasov</a></span> on Pexels.com.</p>
            </div>
        </div>
    )
}