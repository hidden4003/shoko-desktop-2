import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Events from "../../core/events";
import ErrorBoundary from "../ErrorBoundary";
import {ReactComponent as CloseWindowIcon} from "../../../resources/icons/svg/windowClose.svg";
import {ReactComponent as MaximizeWindowIcon} from "../../../resources/icons/svg/windowMaximize.svg";
import {ReactComponent as MinimizeWindowIcon} from "../../../resources/icons/svg/windowMinimize.svg";

class Viewport extends Component {
  static propTypes = {
    closeWindow: PropTypes.func.isRequired,
    maximizeWindow: PropTypes.func.isRequired,
    minimizeWindow: PropTypes.func.isRequired
  };

  render() {
    const { children, closeWindow, maximizeWindow, minimizeWindow } = this.props;
    return (
      <div className="shoko-main-viewport">
        <div id="app-drag-handle" className="top-navbar">
          <div className="shoko-logo">
            <div className="left-part"/>
            <div className="text">Shoko Desktop</div>
            <div className="right-part"/>
          </div>
          <div className="window-buttons">
            <div onClick={minimizeWindow}><MinimizeWindowIcon/></div>
            <div onClick={maximizeWindow}><MaximizeWindowIcon /></div>
            <div className="close-button" onClick={closeWindow}><CloseWindowIcon /></div>
          </div>
        </div>
        <div className="main-content">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeWindow: e => {
      e.preventDefault();
      dispatch({ type: Events.EXIT });
    },
    maximizeWindow: e => {
      e.preventDefault();
      dispatch({ type: Events.WINDOW_MAXIMIZE });
    },
    minimizeWindow: e => {
      e.preventDefault();
      dispatch({ type: Events.WINDOW_MINIMIZE });
    }
  };
}

export default connect(
  undefined,
  mapDispatchToProps
)(Viewport);
