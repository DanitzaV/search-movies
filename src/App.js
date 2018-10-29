import React, { Component } from 'react';

import './App.css';
import Peliculas from './componentes/Peliculas/Peliculas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Peliculas />
      </div>
    );
  }
}

export default App;
