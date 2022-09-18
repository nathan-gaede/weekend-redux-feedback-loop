import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//Redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const comment = (state = '', action) => {
    if (action.type === 'ADD_COMMENT') {
        return action.payload;
    }
    return state;
}

//Keep track of reducers here!
const storeInstance = createStore(
    combineReducers(
        {
            comment,

        }
    ),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
