import React, { Component } from 'react';
import logo from '../images/snow.svg';
import './weather.css';

class Weather extends Component {
  returnDate () {
    var date = new Date();
    date.setTime(Date.now());
    return date.toLocaleString();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <br />
          Temperatura:
          <br />
          Tá começando a ficar frio!
          <br />
          <br />
          Atualizado em: {this.returnDate()}
        </header>
      </div>
    );
  }
}

export default Weather;

