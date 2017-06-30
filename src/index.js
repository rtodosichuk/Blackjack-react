import 'babel-polyfill';
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import App from './components/App';
import './styles/styles.css';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
  <Router history={browserHistory} routes={routes} />
</Provider>
, document.getElementById("app"));