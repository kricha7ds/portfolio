import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useEffect, useState } from "react";
import { featuredPortfolio,
    smwebPortfolio,
    lgwebPortfolio,
    datavisPortfolio,
    linkedSpacePortfolio } from "../../data";



export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
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
        {
            id: "lgwebapp2",
            title: "LinkedSpace",
        },
    ];

    useEffect(() =>{
        switch(selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "smwebapp":
                setData(smwebPortfolio);
                break;
            case "lgwebapp":
                setData(lgwebPortfolio);
                break;
            case "datavis":
                setData(datavisPortfolio);
                break;
            case "lgwebapp2":
                setData(linkedSpacePortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected]);

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
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt=""></img>
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}