import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary App</header>
        <main>
          <Dictionary defaultKeyword="nature" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a href="https://github.com/steph-sketch850">Stephanie Rodriguez</a>{" "}
            and is{" "}
            <a href="https://github.com/steph-sketch850/react-dictionary-project">
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a href="https://webster-dictionary.netlify.app/">
              hosted on Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
