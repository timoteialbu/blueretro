import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import uuidv4 from 'uuid/v4';
import classNames from 'classnames';
import Modal from '@material-ui/core/Modal';
import ReactQuill from 'react-quill';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

import Item from './Item';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const NewItem = (type) => ({
  id: uuidv4(),
  type: type,
  body: 'Please enter something',
  owner: 'timotei',
  upvotes: [],
  votes: 0,
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
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

const goodEmoji = (classes) => {
  return (
    <span
      className={classNames(classes.row, classes.emoji)}
      role="img"
      aria-label="Good"
    >
      👍
    </span>
  )
}

const badEmoji = (classes) => {
  return (
    <span
      className={classNames(classes.row, classes.emoji)}
      role="img"
      aria-label="Bad"
    >
      👎
    </span>
  )
}

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items,
      selected: null,
      open: false,
    }
  }

  handleClose = () => {
    this.setState({ selected: null });
  };

  onClickGood = (event) => {
    let selected = NewItem('good');
    this.setState({
      selected,
      open: true,
    })
  }

  onClickBad = (event) => {
    let selected = NewItem('bad');
    this.setState({
      selected,
      open: true,
    })
  }

  onSave = (value, type) => {
    let newItem = this.state.selected;
    let oldItems = this.state.items;

    this.setState({
      items: [...oldItems, newItem],
      selected: null,
      open: false,
    });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      selected: null,
    });
  };

  render() {
    const { classes } = this.props;
    const { items, selected } = this.state;

    let onEdit = this.onEdit;

    // if (selected != null) {
    //   return (
    //     <Item data={selected} onCancel={onCancel} onSave={onSave}/>
    //   );
    // }

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
              {goodEmoji(classes)}
            </Button>
          </div>
          <div className={classNames("col-6", classes.row)}>
            <Button
              variant="flat"
              style={{ backgroundColor: 'transparent' }}
              aria-label="Add Bad"
              lassName={classes.button}
              onClick={this.onClickBad}
            >
              {badEmoji(classes)}
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
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
              { selected ? selected.type === 'good' ? goodEmoji(classes) : badEmoji(classes) : null }
            </Typography>
            <Typography variant="subheading" id="simple-modal-description" style={{ backgroundColor: '#ECEFF1' }}>
              <ReactQuill
                value="Please say something..."
                theme="bubble"
              />
            </Typography>
            <div style={{ textAlign: 'center', marginTop: '25px' }}>
              <Button
                variant="contained"
                color="secondary"
                key={1}
                size="small"
                onClick={() => this.setState({ open: false, selected: null })}
                style={{ marginRight: '10px' }}
              >
                <DeleteIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                key={2}
                size="small"
                onClick={() => this.onSave()}
                style={{ marginLeft: '10px' }}
              >
                Save
                <SaveIcon className={classNames(classes.rightIcon, classes.iconSmall)} />
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(Body);