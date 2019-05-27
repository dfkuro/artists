import React, { Component } from 'react'
import axios from 'axios'
import { map } from 'rsvp';
import Albums from '../../albums/container'

export default class Artist extends Component {

  // state = {
  //   artists: {}
  // };

  constructor(props) {
    super(props);
    this.state = { artists: [] };
  }

  componentDidMount(){
    axios.get("http://lastfm-api.herokuapp.com/artists").then(res => {
      this.setState({artists: res.data});
    })

  }

  showInformation(artistName) {
    axios.get('http://lastfm-api.herokuapp.com/artist/'+artistName+'/albums').then(res => {
      this.setState({ albumsTemp: res.data });
    })
  }

  render() {
    return (
      <div>
        <div id="artists">
          {
            this.state.artists && this.state.artists.map(object => {
              return <ul key={object.artist}>{object.artist}<button onClick={this.showInformation.bind(this, object.artist)}>+</button></ul>
            })
          }
        </div>
        <Albums albums={this.state.albumsTemp}/>
      </div>
    )
  }
}
