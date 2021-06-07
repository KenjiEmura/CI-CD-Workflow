import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my <code>CI/CD</code> dummy React Project
        </p>
        <p>App version 3.0</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kenji's React App
        </a>
      </header>
    </div>
  );
}

export default App;
