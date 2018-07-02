import React, { Component } from 'react';
import './App.css';
import DiskussioPost from './DiskussioPost';
import dummyData from './data/dummyData';

console.log(dummyData);
class App extends Component {
  render() {
    return (
      <div className="App">
      {dummyData.map(diskussioPost => {
        return (
         <div>
         <DiskussioPost 
         title={diskussioPost.title}
         comment={diskussioPost.comments}
          />
          </div>
        )
      })}
      </div>
    );
  }
}

export default App;
