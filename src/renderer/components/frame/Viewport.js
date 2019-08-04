import React, { Component } from 'react';
import Login from '../../components/Login';

export default class Viewport extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="shoko-main-viewport">
        <div className="top-navbar">
          <div className="shoko-logo">
            <div className="left-part"/>
            <div className="text">Shoko Desktop</div>
            <div className="right-part"/>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    );
  }
}
