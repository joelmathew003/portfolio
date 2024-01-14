import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Socials from "./components/Socials";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Tech from "./components/Tech";

function App() {
  return (
    <div className="h-full bg-gradient-to-b from-black via-black to-gray-800 bg-fixed">
      <NavBar />
      <Socials />
      <Home />
      <About />
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
