import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Socials from "./components/Socials";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800 bg-fixed">
      <NavBar />
      <Socials />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
