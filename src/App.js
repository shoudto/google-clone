import './App.css';
import Home from './pages/Home';

function App() {
  return (
    // BEM
    <div className="app">
      <h1>This is working</h1>

      {/* Home (the one with the search on) */}
      <Home />
      {/* Search page (The results page) */}
    </div>
  );
}

export default App;
