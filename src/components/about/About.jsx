import "./about.scss"

export default function About() {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/headshot.jpg" alt="" />
                    <div className="captionContainer">
                        <p className="title">Katherine Richards</p>
                        <p className="badge">Graduated December 2021</p>
                        <p>BSc. with Specialization in Computer Science</p>
                        <p>University of Alberta, Edmonton, AB Canada</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <p className="greeting"><em>Welcome! Bienvenue!</em></p>
                    <p>Thank you for stopping by - I'm thrilled to have you here!</p>
                    <p>
                        I am a New Grad looking to begin my professional career in a tech role. 
                        I am eager to join a team that is willing to provide mentorship, but also offers
                        a trusting, yet dynamic, environment that promotes further personal development.
                    </p>
                    <p>
                        <span>What can I provide for you?</span> Excellent backend knowledge of modern web frameworks,
                        creative frontend design and implementation as well as a strong background in logistics analytics.
                    </p>
                    <p>
                        <span>What is this page?</span> I created this page to showcase some items from my portfolio. 
                        Please consider this web page itself as an additional portfolio item (created with React.js). 
                        Feel free to browse the remainder of this page to see visuals for some of the projects 
                        I have worked on to date.            
                    </p>
                    <p>
                        For a more descriptive explanation of my technical skills, please download my resume. 
                        Again, thank you for visiting my page.
                    </p>
                </div>
            </div>
        </div>
    )
}