import { combineReducers } from 'redux';

import articleReducer from './articleReducer';

const rootReducer = combineReducers({
  articlesState: articleReducer
});

export default rootReducer;