import './App.css';
import Countries from './components/Countries';
import SearchCountry from './components/SearchCountry';

function App() {
  return (
    <div className="App">
      <h1>COUNTRIES</h1>
      <SearchCountry />
      <Countries />
    </div>
  );
}

export default App;
