import React, { Component } from 'react';
import './App.css';
import DiskussioPost from './DiskussioPost';
import firebase from 'firebase/app'
import _ from 'lodash'
import AddPost from './AddPost';
import moment from 'moment';

//console.log(dummyData);
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      diskussioPosts: {},
    }
    firebase.database().ref('posts')
    .on('value', (snapshot)=> {
        this.setState({diskussioPosts: snapshot.val()})
     })
  }
  render() {
    return (
      <div className="App">
        <AddPost onAdd={(diskussioPost) =>{
          const newDiskussioPost = {...diskussioPost,comment:5, submitted: moment().format()}
          //this.setState({diskussioPost: this.state.diskussioPosts.concat(newDiskussioPost)})}
          firebase.database().ref('posts').push(newDiskussioPost)}
          } />
      {_.map(this.state.diskussioPosts, diskussioPost => {
        return (
         <div>
         <DiskussioPost 
         title={diskussioPost.title}
         comment={diskussioPost.comments}
         submitted={diskussioPost.submitted}
          />
          </div>
        )
      })}
      </div>
    );
  }
}

export default App;
