import "./work.scss";
// import { PhoneAndroidOutlined } from "@material-ui/icons";
import { workItems } from "../../workExp";
import { useState } from "react";

export default function Work() {
    const [currentSlide, setCurrentSlide] = useState(0) // default to 0'th item
    /* Function handles both "Next" actions in either direction (left or right) for slider. 
        - if currentSlide index < items.len then just go to the next item 
        - when currentSlide index >= items.len, go to item at index 0 */
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
                                    {d.highlights.map(point => <li key={point}> {point} </li>)}
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