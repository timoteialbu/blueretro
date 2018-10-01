import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import uuidv4 from 'uuid/v4';
import classNames from 'classnames';

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
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  emoji: {
    fontSize: '50px',
    verticalAlign: 'middle',
    lineHeight: 2
  }
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

    const orderedItems = _.orderBy(items, ['votes'],['desc']);

    return (
      <div>
        <header>
          <h1 className="App-title">Retrospective</h1>
        </header>
        <div className="row">
          <div className={classNames("col-6", classes.row)}>
            <Button
              variant="flat"
              style={{ backgroundColor: 'transparent' }}
              aria-label="Add Good"
              lassName={classes.button}
              onClick={this.onClickGood}
            >
              <span
                className={classNames(classes.row, classes.emoji)}
                role="img"
                aria-label="Good"
              >
                👍
              </span>
            </Button>
          </div>
          <div className={classNames("col-6", classes.row)}>
            <Button
              variant="flat"
              style={{ backgroundColor: 'transparent' }}
              aria-label="Add Bad"
              lassName={classes.button}
              onClick={this.onClickGood}
            >
              <span
                className={classNames(classes.row, classes.emoji)}
                role="img"
                aria-label="Bad"
              >
                👎
              </span>
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            { _.map(orderedItems, (o, i) => {
              if (o.type === 'good')
              {
                return (
                  <Grow
                    key={i}
                    in={true}
                    timeout={1000}
                    style={{ transformOrigin: '0 0 0', margin: '10px' }}
                  >
                    <div className="row" style={{ margin: '10px' }}>
                        <Item data={o} onEdit={onEdit}/>
                    </div>
                  </Grow>
                );
              }
            })}
          </div>
          <div className="col-6">
            { _.map(orderedItems, (o, i) => {
              if (o.type === 'bad')
              {
                return (
                  <Grow
                    key={i}
                    in={true}
                    timeout={1000}
                    style={{ transformOrigin: '0 0 0', margin: '10px' }}
                  >
                    <div key={i} style={{ margin: '10px' }}>
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