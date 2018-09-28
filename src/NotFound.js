import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  parent: {
    paddinTtop: '100px',
    textAlign: 'center',
  }
});

class NotFound extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.parent}>
          <h3>Sorry, page not found!</h3>
        </div>
    );
  }
}
export default withStyles(styles)(NotFound);