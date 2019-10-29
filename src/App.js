import React, {Component} from 'react';
import PodcastBox from './containers/MusicBox'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is the App speaking.</h1>
        <PodcastBox />
      </div>
    )
  }
}

export default App;


// api: https://rss.itunes.apple.com/api/v1/gb/podcasts/top-podcasts/all/50/explicit.json