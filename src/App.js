import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar'
import ThreeTest from './components/ThreeTest';
import Home from './components/Home/Home';
import About from './components/About/About'
import AnimatedCursor from 'react-animated-cursor'
import Project from './components/Work/Project';
import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedCursor />
      <AnimatePresence exitBeforeEnter>
        <Routes>

          <Route exact path="/" element={<Home />}>

          </Route>
          <Route path="/about" element={<About />}>

          </Route>
          <Route path="/vo2" element={<Project />}>

          </Route>
          <Route path="/counselab" element={<About />}>

          </Route>
        </Routes>
      </AnimatePresence>

    </Router>
  );
}

export default App;
