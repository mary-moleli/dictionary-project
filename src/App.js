import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div>
      <main>
        <Dictionary defaultKeyword="Milan" />
      </main>
      <footer className="footer">
        This App is coded by Mary Moleli and is hosted on Netlify
      </footer>
    </div>
  );
}
export default App;
