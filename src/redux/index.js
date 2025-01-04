
import thunk from 'redux-thunk';
import repoReducer from './repoReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';


const rootReducer = combineReducers({
  repos: repoReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;


