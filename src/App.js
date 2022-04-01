import React from "react";
import data from './data/data.json'
import Aventura from './components/Aventura'

function App() {
  return (
    <div className="App">
      <Aventura options={data} />
    </div>
  );
}

export default App;
