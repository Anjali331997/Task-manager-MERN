import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';

const reducer = combineReducers({});
const store = createStore(reducer, applyMiddleware())

export default store;