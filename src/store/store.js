import { createStore, applyMiddleware } from 'redux';
import { reducer } from './index';

import thunk from 'redux-thunk'
import logger from 'redux-logger'

// const store = createStore( reducer );
const store = createStore( reducer, applyMiddleware(logger, thunk));

export default store;

