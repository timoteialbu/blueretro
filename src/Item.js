import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'react-quill/dist/quill.bubble.css';
import ReactQuill from 'react-quill';

const styles = {
	card: {
		minWidth: '450px',
		width: '100%',
    width: '-moz-available;',         /* WebKit-based browsers will ignore this. */
    width: '-webkit-fill-available',  /* Mozilla-based browsers will ignore this. */
    width: 'fill-available',
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
	constructor(props) {
		super(props);

		this.state = {
			data: props.data,
		}
	}

	handleChange(value) {
		const data = this.state.data;
    this.setState({ data: { ...data, body: value} });
	}

	render() {
		const {
			classes,
			onCancel,
			onEdit,
			onSave,
			data,
		} = this.props;

		const {
			body,
			id,
			type,
		} = this.state.data;

		let onCancelButton = <Button key={1}	size="small"	onClick={() => onCancel()}>Cancel</Button>;
		let onEditButton = <Button key={2}	size="small"	onClick={() => onEdit(data)}>Edit</Button>;
		let onSaveButton = <Button key={3}	size="small"	onClick={() => onSave(this.state.data)}>Save</Button>;

		return (
			<Card className={classes.card}>
				<CardContent>
					{/* <ReactQuill
						theme="bubble"
						value={body}
						onEditorChange={(value, delta, source, editor) => this.handleChange(editor.getContents())}
					/> */}
					{body}
				</CardContent>
				<CardActions>
					{ onEdit ? onEditButton : [onSaveButton, onCancelButton]}
				</CardActions>
			</Card>
		);
	}
}

Item.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		owner: PropTypes.string.isRequired,
	}),
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);