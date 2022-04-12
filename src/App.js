import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Homepage from "./Components/Homepage";
import Skills from "./Components/Skills";
import Quali from "./Components/Quali";
import Projects from "./Components/Projects";
import ocean from './Components/ocean.jpg'
import Footer from "./Components/Footer";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  let bgStyle = {
    backgroundImage: `url(${ocean})`,
    backgroundPosition: "center",
  }


  return (
    <>
      <Router>

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage bgStyle={bgStyle} />}></Route>
          <Route exact path="/skills" element={<Skills bgStyle={bgStyle} />}></Route>
          <Route exact path="/qualifications" element={<Quali bgStyle={bgStyle} />}></Route>
          <Route exact path="/projects" element={<Projects bgStyle={bgStyle} />}></Route>
          <Route exact path="/contact" element={<Contact bgStyle={bgStyle} />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
