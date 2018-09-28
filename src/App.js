import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Login from './Login';
import Body from './Body';

import './App.css';

const styles = theme => ({
});

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Body} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);
