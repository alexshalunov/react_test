import { combineReducers } from 'redux';

import { reducer as testUserReducer } from './test/reducer'

const reducer = combineReducers({
    testUser: testUserReducer
})

export { reducer };