import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Socials from "./components/Socials";
import About from "./components/About";

function App() {
  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800 bg-fixed">
      <NavBar />
      <Socials />
      <Home />
      <About />
    </div>
  );
}

export default App;
