import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <News apiKey={this.apiKey}></News>
      </div>
    )
  }
}
