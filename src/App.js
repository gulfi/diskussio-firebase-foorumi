import React, { Component } from 'react';
import './App.css';
import DiskussioPost from './DiskussioPost';
import firebase from 'firebase/app'
import _ from 'lodash'


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
