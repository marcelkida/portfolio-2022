import React from 'react';
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

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
        </Routes>
      </AnimatePresence>
    );
};

export default AnimatedRoutes;
