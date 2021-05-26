import logo from './logo.svg';
import Nav from "./components/Nav"
import About from "./components/About"
import Welcome from "./components/Welcome"
import Top from "./components/Top"
import { Waypoint } from "react-waypoint"
import './App.css';
import React, { useEffect, useState } from 'react';
import Watcher from './components/Watcher';
import Bottom from './components/Bottom';

function App() {
  const [hasScrolledTop, setHasScrolledTop] = useState(false)
  const [hasScrolledBottom, setHasScrolledBottom] = useState(false)
  const [nav, setNav] = useState(true)
  const [watcherOne, setWatcherOne] = useState(true)
  const [watcherTwo, setWatcherTwo] = useState(false)
  const [animate, setAnimate] = useState(true)


  setTimeout(() => {
    console.log("Use effect works")
    setAnimate(false)
  }, 1000)



  // toggles bottom waypoint and changes top section content
  function handleBottomWaypoint() {
    setHasScrolledBottom(!hasScrolledBottom)
    setWatcherOne(!watcherOne)
    setWatcherTwo(!watcherTwo)
  }

  // toggles top waypoint and changes bottom section content
  function handleTopWaypoint() {
    setHasScrolledTop(!hasScrolledTop)
    setWatcherTwo(!watcherTwo)
    setWatcherOne(!watcherOne)
  }

  return (
    <div className="App">
      <Watcher active={watcherTwo} onEnter={handleTopWaypoint} />
      <Top animate={animate} hasScrolled={hasScrolledBottom} />
      <Bottom hasScrolled={hasScrolledTop} />
      <Watcher active={watcherOne} onEnter={handleBottomWaypoint} />
    </div>
  );
}

export default App;
