import React, {Component} from 'react';
import ArtistSelector from '../components/ArtistSelector';
import TrackDetail from '../components/TrackDetail';

class MusicBox extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      top50: []
    }
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=50/json'

    fetch(url)
      .then(res => res.json())
      .then(top50 => this.setState({ top50: top50 }))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="MusicBox">
        <h2>This is the MusicBox speaking.</h2>
        <ArtistSelector top50={this.state.top50}/>
        <TrackDetail />
      </div>
    )
  }
}

export default MusicBox;