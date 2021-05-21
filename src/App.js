import logo from './logo.svg';
import Nav from "./components/Nav"
import About from "./components/About"
import Welcome from "./components/Welcome"
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Welcome />
      <About />
    </div>
  );
}

export default App;
