import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import AsyncComponent from './AsyncComponent';

// Feature enabled by .babelrc
const dashboard = () => import(/* webpackChunkName: "dashboard" */ './components/dashboard');
const transact = () => import(/* webpackChunkName: "transacts" */ './components/transacts');
const contacts = () => import(/* webpackChunkName: "contacts" */ './components/contacts');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: 'dashboard',
    };
  }

  handleClick(type) {
    console.log('>>> type', type);
    this.setState({
      content: type
    });
  }

  renderDynamicContent() {
    const { content } = this.state;
    console.log('>>>>> rerendering');
    let ctxHtml = null;
    switch (content) {
      case 'transact':
        console.log('>>>> loading');
        ctxHtml = <AsyncComponent key={content} moduleProvider={transact} />;
        break;
      case 'contacts':
        console.log('>>>> changing');
        ctxHtml = <AsyncComponent key={content} moduleProvider={contacts} />;
        break;
      default: // case dashboard
        ctxHtml = <AsyncComponent key={content} moduleProvider={dashboard} />;
        break;
    }
    console.log(ctxHtml);
    return ctxHtml;
  }

  render() {
    return (
      <div>
        <h1>React Lazy loading</h1>
        <div>
          <button className="btn btn-primary" onClick={this.handleClick.bind(this, 'dashboard')}>Dashboard</button>
          <button className="btn btn-success" onClick={this.handleClick.bind(this, 'transact')}>Transact</button>
          <button className="btn btn-info" onClick={this.handleClick.bind(this, 'contacts')}>Contact</button>
        </div>
        {this.renderDynamicContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);