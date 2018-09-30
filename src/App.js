import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { store } from "./store";
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
          <Route
            path="/login" exact
            render={(props) => <Login {...props} />} />
          <Route
            path="/" exact
            render={(props) => <Body {...props} items={store.getState().goodItems} />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
