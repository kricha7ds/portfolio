import "./work.scss";
import {PhoneAndroidOutlined} from "@material-ui/icons";

export default function Work() {
    return (
        <div className="work" id="work">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <PhoneAndroidOutlined className="img"/>
                                </div>
                                <h2>Title</h2>
                                <h5>Employer</h5>
                                <p className="date"><em>Date of employment.</em></p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Cras sed libero at nibh placerat mollis. Aenean at bibendum nibh.
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
            </div>
        </div>
    )
}