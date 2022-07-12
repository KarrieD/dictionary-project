import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            <a href="https://github.com/KarrieD/dictionary-project">
              Open-source code
            </a>{" "}
            by Karrie Brooks
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
