import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import _ from 'lodash';
import uuidv4 from 'uuid/v4';
import './App.css';
import Item from './Item';

const NewItem = (type) => ({
  id: uuidv4(),
  type: type,
  body: 'Please enter something',
})

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goodItems: [],
      badItems:[],
      selected: null,
    }
  }

  onClickGood = (event) => {
    let newGoodItems = [ ...this.state.goodItems, NewItem('good') ];
    this.setState({
      goodItems: newGoodItems
    })
  }

  onClickBad = (event) => {
    let newBadItems = [ ...this.state.badItems, NewItem('bad') ];
    this.setState({
      badItems: newBadItems
    })
  }

  onEditClick = (selected) => {
    this.setState({ selected })
  }

  render() {
    let onEditClick = this.onEditClick;
    const { goodItems, badItems } = this.state;
    return (
      <div>
        <header>
          <h1 className="App-title">Retrospective</h1>
        </header>
        <div className="row">
          <div className="col-6">
            <Button 
              variant="contained"
              color="primary"
              onClick={this.onClickGood}
            >
              Add Good Item...
            </Button>
          </div>
          <div className="col-6">
            <Button
              variant="contained"
              color="primary"
              onClick={this.onClickBad}
            >
              Add Bad Item...
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            { _.map(goodItems, (o, i) => {
              return (
                <div key={i} className="row">
                  <Item { ...o } onEditClick={onEditClick}/>
                </div>
              );
            })}
          </div>
          <div className="col-6">
            { _.map(badItems, (o, i) => {
              return (
                <div key={i} className="row">
                  <Item { ...o } onEditClick={onEditClick}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
