import logo from './logo.svg';
import Nav from "./components/Nav"
import About from "./components/About"
import Welcome from "./components/Welcome"
import Top from "./components/Top"
import { Waypoint } from "react-waypoint"
import './App.css';
import React, { useState } from 'react';
import Watcher from './components/Watcher';

function App() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [nav, setNav] = useState(true)

  function handleBottomWaypoint() {
    if (!hasScrolled) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  }

  return (
    <div className="App">
      <Top hasScrolled={hasScrolled} />
      <About />
      <Watcher hasScrolled={hasScrolled} callBack={handleBottomWaypoint} />
    </div>
  );
}

export default App;
