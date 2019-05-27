import React, { Component } from 'react'

export default class Albums extends Component {
  render() {
    return (
      <div>
        <h2>information</h2>
        {console.log(this.props.albums)}
      </div>
    )
  }
}
