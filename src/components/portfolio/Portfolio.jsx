import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useState } from "react";



export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "smwebapp",
            title: "Music Controller",
        },
        {
            id: "lgwebapp",
            title: "YegAccessiblity",
        },
        {
            id: "datavis",
            title: "Data Visualization",
        },
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>My Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                        id={item.id}
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                    />
                ))}
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