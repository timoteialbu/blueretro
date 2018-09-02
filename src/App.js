import React, { Component } from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goodItems: [ { type: 'good'}, { type: 'good'}, { type: 'good'}, { type: 'good'} ],
      badItems:[ { type: 'bad'}, { type: 'bad'}, { type: 'bad'} ]
    }
  }

  render() {
    const { goodItems, badItems } = this.state;
    return (
      <div>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="row">
          { _.map(goodItems, (o) => {
            return <Item { ...o } />
          })}
          { _.map(badItems, (o) => {
            return <Item { ...o } />
          })}
        </div>
      </div>
    );
  }
}

export default App;
