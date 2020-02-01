import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import combinedReducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(combinedReducers);

ReactDOM.render(<Provider store={store}><App/></Provider> , document.getElementById('root'));