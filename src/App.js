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

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home />}>
            
          </Route>
          <Route path="/about" element={<About />}>
            
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
