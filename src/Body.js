import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import uuidv4 from 'uuid/v4';

import Item from './Item';

const NewItem = (type) => ({
  id: uuidv4(),
  type: type,
  body: 'Please enter something',
  owner: 'timotei'
})

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
    }
  }

  handleClose = () => {
    this.setState({ selected: null });
  };

  onClickGood = (event) => {
    // let newItems = [ ...this.state.goodItems, NewItem('good') ];
    // this.setState({
    //   goodItems: newGoodItems
    // })
  }

  onClickBad = (event) => {
    // let newBadItems = [ ...this.state.badItems, NewItem('bad') ];
    // this.setState({
    //   badItems: newBadItems
    // })
  }

  onCancel = () => {
    this.setState({ selected: null });
  }

  onEdit = (selected) => {
    this.setState({ selected })
  }

  onSave = (selected) => {
    switch (selected.type) {
      case "good":
        // let newGoodItems = _.map(this.state.goodItems, (item) => {
        //   if (item.id === selected.id)
        //   {
        //     return selected;
        //   }

        //   return item;
        // });

        // this.setState({
        //   goodItems: newGoodItems,
        //   selected: null
        // });
        break;
      case "bad":
        // let newBadItems = _.map(this.state.badItems, (item) => {
        //   if (item.id === selected.id)
        //   {
        //     return selected;
        //   }

        //   return item;
        // });

        // this.setState({
        //   badItems: newBadItems,
        //   selected: null
        // });
        break;
      default:
        break;
    }
  }

  render() {
    const { items, classes } = this.props;
    const { selected } = this.state;

    let onCancel = this.onCancel;
    let onEdit = this.onEdit;
    let onSave = this.onSave;

    if (selected != null) {
      return (
        <Item data={selected} onCancel={onCancel} onSave={onSave}/>
      );
    }

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
            { _.map(items, (o, i) => {
              if (o.type === 'good')
              {
                return (
                  <Grow
                    key={i}
                    in={true}
                    timeout={1000}
                    style={{ transformOrigin: '0 0 0' }}
                  >
                    <div className="row" >
                        <Item data={o} onEdit={onEdit}/>
                    </div>
                  </Grow>
                );
              }
            })}
          </div>
          <div className="col-6">
            { _.map(items, (o, i) => {
              if (o.type === 'bad')
              {
                return (
                  <Grow
                    key={i}
                    in={true}
                    timeout={1000}
                    style={{ transformOrigin: '0 0 0' }}
                  >
                    <div key={i} className="row">
                      <Item data={o} onEdit={onEdit}/>
                    </div>
                  </Grow>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Body);