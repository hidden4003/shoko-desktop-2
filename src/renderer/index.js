import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './pages/root';
import history from './core/store/history';
import { configureStore } from './core/store/configureStore.dev';
import '../resources/css/app.global.css';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
document.body
);

