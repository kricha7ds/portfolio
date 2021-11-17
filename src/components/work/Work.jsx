import "./work.scss";
// import { PhoneAndroidOutlined } from "@material-ui/icons";
import { workItems } from "../../workExp";
import { useState } from "react";

export default function Work() {
    const [currentSlide, setCurrentSlide] = useState(0) // default to 0'th item
    const handleClick = (dir)=>{
        dir === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : workItems.length - 1) :
        setCurrentSlide(currentSlide < workItems.length - 1 ? currentSlide + 1 : 0);
    }
    return (
        <div className="work" id="work">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            {workItems.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.img} alt=""/>
                                    {/* <PhoneAndroidOutlined className="img"/> */}
                                </div>
                                <h2>{d.title}</h2>
                                <h5>{d.emp}</h5>
                                <p className="date"><em>{d.date}</em></p>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="rightContainer">
                                <ul>
                                    <li>Point 1</li>
                                    <li>Point 2</li>
                                    <li>Point 3</li>
                                    <li>Point 4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <img src ="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
            <img src ="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")}/>
        </div>
    )
}