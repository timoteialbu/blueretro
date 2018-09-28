import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Login from './Login';
import Body from './Body';
import NotFound from "./NotFound";

import './App.css';

const styles = theme => ({
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Body} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
