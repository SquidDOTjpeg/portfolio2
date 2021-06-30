import Top from "./components/Top"
import './App.css';
import React, { useState } from 'react';
import Watcher from './components/Watcher';
import Bottom from './components/Bottom';

function App() {
  const [hasScrolledTop, setHasScrolledTop] = useState(false)
  const [hasScrolledBottom, setHasScrolledBottom] = useState(false)
  const [watcherOne, setWatcherOne] = useState(true)
  const [watcherTwo, setWatcherTwo] = useState(false)

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

  //Need to refactor page to be stylized the way that I want it to be
  //Consider better flexbox or css grid as two options
  //Obivously there's css framworks too but I want to use base css to show that I know what's going on

  return (
    <div className="App">
      <Watcher active={watcherTwo} onEnter={handleTopWaypoint} />
      <Top hasScrolled={hasScrolledBottom} />
      <Bottom hasScrolled={hasScrolledTop} />
      <Watcher active={watcherOne} onEnter={handleBottomWaypoint} />
    </div>
  );

}

export default App;
