import React, { useState } from 'react'
import './App.css';
import Countries from './components/Countries';
import SearchCountry from './components/SearchCountry';

function App() {
  const [search, setSearch] = useState("")

  const handleSearch = e => setSearch(e.target.value)

  return (
    <div className="App">
      <h1>COUNTRIES</h1>
      <SearchCountry search={search} handleSearch={handleSearch} />
      <Countries search={search} />
    </div>
  );
}

export default App;
