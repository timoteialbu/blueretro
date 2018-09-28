import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
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
      goodItems: [{"id":"ce49f479-7593-4f66-b512-c6160ae1945f","type":"good","body":"Please enter something"},{"id":"d04f0fc6-2a6c-4973-ad73-c354d52f018f","type":"good","body":"Please enter something"},{"id":"b48ccc30-4d34-4ada-8b25-30ab4ff94a0c","type":"good","body":"Please enter something"},{"id":"c7ac12e4-bed5-47e4-b6aa-dfe559cf6902","type":"good","body":"Please enter something"},{"id":"3cc67729-0317-4206-b20c-757dfbfdfe12","type":"good","body":"Please enter something"},{"id":"395d712d-3050-4bac-a28b-25651dc815c0","type":"good","body":"Please enter something"}],
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
                <Grow
                  key={i}
                  in={true}
                  timeout={1000}
                  style={{ transformOrigin: '0 0 0' }}
                >
                  <div className="row" >
                      <Item { ...o } onEditClick={onEditClick}/>
                  </div>
                </Grow>
              );
            })}
          </div>
          <div className="col-6">
            { _.map(badItems, (o, i) => {
              return (
                <Grow
                  key={i}
                  in={true}
                  timeout={1000}
                  style={{ transformOrigin: '0 0 0' }}
                >
                  <div key={i} className="row">
                    <Item { ...o } onEditClick={onEditClick}/>
                  </div>
                </Grow>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
