// From https://medium.com/front-end-hacking/lazy-loading-with-react-redux-and-webpack-2-35ad6fc1b640

import React, { PureComponent } from 'react';
import LoadingIndicator from './common/LoadingIndicator';

export default class extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      Component: null
    }
  }

  componentDidMount() {
    console.log('>>>> component did mount');
    if(!this.state.Component) {
      this.props.moduleProvider().then( (Component) => this.setState({ Component: Component.default }));
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('>>>> component will receive props');
    nextProps.moduleProvider().then( (Component) => this.setState({ Component: Component.default }));
  }

  render() {
    const { Component } = this.state;
    console.log('>>>>Component', Component);

    //The magic happens here!
    return (
      <div>
        {Component ? <Component /> : <LoadingIndicator />}
      </div>
    );
  }
};