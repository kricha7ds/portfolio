import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <img src="assets/wonderland.png" alt=""/>
            <div className="primary-text-on-image">
                <h2>Welcome! I'm</h2>
                <h1>Katherine Richards</h1>
                <h3>Junior<span></span></h3>
            </div>
            <div className="credit-text-on-image">
                <p className="credit">photo by Anton Atanasov on Pexels.com.</p>
            </div>
        </div>
    )
}