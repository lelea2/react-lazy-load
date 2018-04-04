import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div style={{"background":"red", "color":"white"}}>
        <h1>This is the contacts component {this.props.name}</h1>
      </div>
    );
  }
}