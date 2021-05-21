import logo from './logo.svg';
import Nav from "./components/Nav"
import About from "./components/About"
import Welcome from "./components/Welcome"
import Top from "./components/Top"
import { Waypoint } from "react-waypoint"
import './App.css';
import React, {useState} from 'react';

function App() {
  const [hasScrolled, setHasScrolled] = useState(false)

  function handleBottomWaypoint() {
    setHasScrolled(true)
  }

  return (
    <div className="App">
      {/* <Nav /> */}
      <Top hasScrolled={hasScrolled} />
      <About />
      <Waypoint onEnter={handleBottomWaypoint} />
    </div>
  );
}

export default App;
