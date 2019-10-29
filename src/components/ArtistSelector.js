import React, {Component, Fragment} from 'react';

class ArtistSelector extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedId: null
    }
  }

  render() {
    return (
      <Fragment>
        <p>This is the ArtistSelector speaking.</p>
        {/* <p>{props[0]}</p> */}
          <select>
            <option>

            </option>
          </select>
      </Fragment>
    )
  }
}

export default ArtistSelector;