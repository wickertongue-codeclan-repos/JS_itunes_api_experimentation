import React, {Component, Fragment} from 'react';

class ArtistSelector extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedId: null
    }
  }

  render() {
    // const dropdown = this.props.top50.map((track, index) => {
    //   return <option value={index} key={index}>{track.feed.entry["im:name"]}</option>
    // })

    return (
      <Fragment>
        <p>This is the ArtistSelector speaking.</p>
        <p>{this.props.top50.feed.entry[0]["im:name"].label}</p>
          <select>
            <option>

            </option>
          </select>
      </Fragment>
    )
  }
}

export default ArtistSelector;