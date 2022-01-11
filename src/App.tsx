import React from 'react';
import logo from './logo.svg';
import './App.css';
import Votes from './components/Votes'
import AdDesigner from './components/AdDesigner'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ice Cream Wars</h1>
      </header>
      <div className="box">
        <div className="AdDesigner">
          <AdDesigner />
        </div>
        <div className="Votes">
          <Votes />
        </div>
      </div>
    </div>
  );
}

export default App;
