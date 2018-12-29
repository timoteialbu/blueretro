import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import 'react-quill/dist/quill.bubble.css'
import ReactQuill from 'react-quill'
import Avatar from '@material-ui/core/Avatar'
import _ from 'lodash'

const heart = (color) => {
  return <svg style={{ width: '24px', height: '24px' }} viewBox='0 0 24 24'>
    <path fill={color} d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z' />
  </svg>
}

const getRandomColor = () => {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const avatarStyle = (color) => {
  return {
    margin: 10,
    color: '#fff',
    backgroundColor: color
  }
}

const styles = {
  avatar: {
    backgroundColor: '#fff',
    margin: 10,
    width: 30,
    height: 30
  },
  card: {
    minWidth: '450px',
    width: '100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  row: {
    display: 'flex'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}

class Item extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nunc condimentum augue egestas accumsan. Aenean varius mi sodales, sollicitudin dui id, sodales tellus. Aenean aliquam arcu a tincidunt hendrerit. Praesent quis mi et urna ornare suscipit ac sit amet justo. Integer tristique sit amet mauris sed molestie. Ut suscipit vel ligula nec mollis. Donec suscipit est nibh, in placerat ligula luctus ac.',
      open: false
    }
  }

  handleChange (value) {
    const data = this.state.data
    this.setState({ data: { ...data, body: value } })
  }

  onSave = (selected) => {
    switch (selected.type) {
      case 'good':
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
        break
      case 'bad':
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
        break
      default:
        break
    }
  }

  onCancel = () => {
    this.setState({ selected: null })
  }

  onEdit = (selected) => {
    this.setState({ selected })
  }

  render () {
    const {
      classes,
      data
    } = this.props

    const {
      type,
      upvotes
    } = data

    // let onCancelButton = <Button key={1} size='small' onClick={() => this.onCancel()}>Cancel</Button>
    // let onEditButton = <Button key={2} size='small' onClick={() => this.onEdit(data)}>Edit</Button>
    // let onSaveButton = <Button key={3} size='small' onClick={() => this.onSave(this.state.data)}>Save</Button>

    let color = upvotes.length > 0 ? 'red' : 'grey'

    return (
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.row} style={{ justifyContent: 'left' }}>
            <Avatar className={classes.avatar} onClick={() => this.props.recordVote(type)}>
              {heart(color)}
            </Avatar>
            <ReactQuill
              theme='bubble'
              value={this.state.text}
              onEditorChange={(value, delta, source, editor) => this.handleChange(editor.getContents())}
            />
          </div>
          <div className={classes.row} style={{ justifyContent: 'center' }}>
            {
              _.map(upvotes, (upvote) => {
                return <Avatar className={classes.avatar} style={avatarStyle(getRandomColor())}>{upvote[0].toUpperCase()}</Avatar>
              })
            }
          </div>
        </CardContent>
        {/* <CardActions style={{ justifyContent: 'space-evenly' }}>
          { [onEditButton, onSaveButton, onCancelButton]}
        </CardActions> */}
      </Card>
    )
  }
}

Item.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired
  }),
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Item)
