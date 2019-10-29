import React, {Component} from 'react';
import MusicBox from './containers/MusicBox'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is the App speaking.</h1>
        <MusicBox />
      </div>
    )
  }
}

export default App;