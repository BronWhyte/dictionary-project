import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App container-fluid">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <a
          href="https://github.com/BronWhyte/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Bronwyn Whyte
      </footer>
    </div>
  );
}
