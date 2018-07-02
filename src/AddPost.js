import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


export default class AddPost extends Component {
  render() {
    return <div >
      <h3>Title</h3>
      <TextField
      style={{width:400}}
          id="title"
          label="Title"
          onChange={(event) => this.setState({title: event.target.value})}
        />
        <Button variant="fab" color="primary" aria-label="add"
        onClick={() => this.props.onAdd(this.state)}
         >
        <AddIcon /> 
      </Button>
    </div>
  }
}
