import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Homepage from "./Components/Homepage";
import Skills from "./Components/Skills";
import Quali from "./Components/Quali";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import PageNotfound from "./Components/PageNotfound";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
 


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/skills" element={<Skills  />}></Route>
          <Route exact path="/qualifications" element={<Quali  />}></Route>
          <Route exact path="/projects" element={<Projects  />}></Route>
          <Route exact path="/contact" element={<Contact  />}></Route>
          <Route path="*" element={<PageNotfound />} ></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
