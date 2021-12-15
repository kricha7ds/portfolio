import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed:60,
          strings: ["Software Developer", "Data Scientist", "Sound Designer"],
        });
      }, []);

    return (
        <div className="intro" id="intro">
            <img src="assets/wonderland.png" alt=""/>
            <div className="primary-text-on-image">
                <h1>Katherine Richards</h1>
                <h2><span ref={textRef}></span></h2>
            </div>
            <div className="credit-text-on-image">
                <p className="credit">photo by <span><a href="https://www.pexels.com/@blooddrainer">Anton Atanasov</a></span> on Pexels.com.</p>
            </div>
        </div>
    )
}