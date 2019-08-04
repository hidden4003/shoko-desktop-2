// @flow
import React, { Component } from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from '../routes';
import ErrorBoundary from '../components/ErrorBoundary';
import Viewport from '../components/frame/Viewport';

type Props = {
  store: {},
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    return (
      <Provider store={this.props.store} context={ReactReduxContext}>
        <ErrorBoundary>
          <Viewport>
            <ConnectedRouter history={this.props.history} context={ReactReduxContext}>
              <Routes />
            </ConnectedRouter>
          </Viewport>
        </ErrorBoundary>
      </Provider>
    );
  }
}
