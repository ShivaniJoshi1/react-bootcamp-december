import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const reduxDevtoolEnh = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store