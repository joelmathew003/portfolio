import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Socials from "./components/Socials";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Tech from "./components/Tech";

function App() {
  return (
    <div className="h-full bg-gray-900 bg-fixed">
      <NavBar />
      <Socials />
      <Home />
      <div className="md:flex">
        <About />
        <Tech />
      </div>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
