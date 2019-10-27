// @flow
import React, { Component } from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import SiteMenuBar from '../../components/SiteMenuBar';
import SiteNavbar from '../../components/SiteNavbar';
import ErrorBoundary from '../../components/ErrorBoundary';

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <SiteNavbar />
        <SiteMenuBar />
        <ErrorBoundary>
          <Dashboard />
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}
