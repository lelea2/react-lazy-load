import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div style={{"background":"#FF69B4", "color":"white"}}>
        <h1>This is the transact component {this.props.name}</h1>
      </div>
    );
  }
}