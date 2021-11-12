import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false); // initial state of menu is closed (false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navbar>
      <div className="sections">
          <Intro></Intro>
          <Portfolio></Portfolio>
          <Work></Work>
          <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
