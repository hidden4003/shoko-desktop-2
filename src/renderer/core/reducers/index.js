import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../store/history';
import series from './series';
import api from './api';
import orm from './orm';
import ui from './ui';
import queue from './queue';
import dashboard from './dashboard';

const rootReducer = combineReducers({
  router: connectRouter(history),
  api,
  series,
  orm,
  ui,
  queue,
  dashboard
});

export default rootReducer;
