import React from 'react';
import logo from './logo.svg';
import './App.css';
import Votes from './components/Votes'
import AdDesigner from './components/AdDesigner'

function App({user}:{user: string}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ice Cream Wars</h1>
        <h4>Welcome {user}</h4>
      </header>
      <div className="box">
        <div className="AdDesignerBox">
          <AdDesigner flavor="Chocolate" fontSize={25} darkTheme={false}/>
          <AdDesigner flavor="Vanilla" fontSize={25} darkTheme={true}/>
          <AdDesigner flavor="Strawberry" fontSize={25} darkTheme={false}/>
        </div>
        <div className="Votes">
          <Votes />
        </div>
      </div>
    </div>
  );
}

export default App;
