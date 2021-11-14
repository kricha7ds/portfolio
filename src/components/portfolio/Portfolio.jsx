import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>My Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Small Web App</li>
                <li>Large Web App</li>
                <li>Data Visualization</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg" alt=""></img>
                    <h3>Music App</h3>
                </div>
                <div className="item">
                    <img src="https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg" alt=""></img>
                    <h3>Music App</h3>
                </div>
                <div className="item">
                    <img src="https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg" alt=""></img>
                    <h3>Music App</h3>
                </div>
                <div className="item">
                    <img src="https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg" alt=""></img>
                    <h3>Music App</h3>
                </div>
                <div className="item">
                    <img src="https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg" alt=""></img>
                    <h3>Music App</h3>
                </div>
                <div className="item">
                    <img src="https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg" alt=""></img>
                    <h3>Music App</h3>
                </div>
            </div>
        </div>
    )
}