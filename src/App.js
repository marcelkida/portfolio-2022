import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Navbar from './components/Navbar'
import ThreeTest from './components/ThreeTest';
import Home from './components/Home/Home';
import About from './components/About/About'
import AnimatedCursor from 'react-animated-cursor'
import Project from './components/Work/Project';
import { AnimatePresence } from 'framer-motion';
import AnimatedRoutes from './AnimatedRoutes';
import Footer from './components/Home/Footer';
import { isMobile } from 'react-device-detect';


function App() {
  console.log("here", isMobile)

  
  return (
    <Router>
      <Navbar isMobile={isMobile}/>
      <AnimatedRoutes isMobile={isMobile}></AnimatedRoutes>
      <Footer isMobile={isMobile} />


    </Router>
  );
}

export default App;
