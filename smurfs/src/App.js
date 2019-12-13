import React from 'react';
import Smurfs from './components/Smurfs';

import './App.css';

function App() {


  return (
    <div className="App">
    <h1>SMURFS! 2.0 W/ Redux</h1>
    <div>Welcome to your state management version of Smurfs!</div>
    <div><Smurfs /></div>
    <div>Have fun!</div>
  </div>
  );
}

export default App;
