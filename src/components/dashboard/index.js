import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div style={{"background":"blue", "color":"white"}}>
        <h1>This is the dashboard component {this.props.name}</h1>
      </div>
    );
  }
}