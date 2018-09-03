import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
	card: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		marginBottom: 16,
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
};

class Item extends Component {
	render() {
		const {
			id,
			body,
			classes,
			type,
			onEditClick,
		} = this.props;
		return (
			<Card className={classes.card}>
				<CardContent>
					<Typography component="p">
						{ body }
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size="small"
						onClick={() => onEditClick(id)}
					>
						Edit
					</Button>
				</CardActions>
			</Card>
		);
	}
}

Item.propTypes = {
	type: PropTypes.string.isRequired,
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);