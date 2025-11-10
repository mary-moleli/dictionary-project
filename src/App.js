import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div>
      <main>
        <Dictionary defaultKeyword="Milan" />
      </main>
      <footer className="footer">
        This App is coded by{" "}
        <a
          href="https://github.com/mary-moleli"
          target="_blank"
          rel="noreferrer"
        >
          Mary Moleli
        </a>{" "}
        and is hosted on{" "}
        <a
          href="https://react-dictionaryy.netlify.app/ "
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
export default App;
