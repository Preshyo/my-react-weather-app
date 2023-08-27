import React from 'react';
import Weather from './Weather';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> React Weather App </h1>
        <Weather />
      </header>
      <footer> This project was coded by Precious Ohasonu and is
        <a href="https://github.com/Preshyo/my-react-weather-app"
          target="_blank"> open-sourced on GitHub</a>
      </footer>
    </div>
  );
}

export default App;
