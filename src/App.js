import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      React.createElement(
        'div',
        null,
        React.createElement('input',{type:"text", value:'valuepara el imput'})
    )
    );
  }
}

export default App;
