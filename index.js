import React from 'react';
import ReactDOM from 'react-dom';
import './node_modules/bootstrap/dist/css/bootstrap.min.css'
// main app
import AppRoutes from './routes'
import { Provider } from 'react-redux';
import store from './store';
import './App.css'
ReactDOM.render(
<Provider store={store}>
	<AppRoutes />

</Provider>,

document.getElementById('app'))