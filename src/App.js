import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Components from './Components/@ComponentsExport';
const Header = Components.Header;
const Content = Components.Content;

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
