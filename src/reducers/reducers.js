import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import isOpenReducer from './isOpen'

export default (history) => combineReducers({
  router: connectRouter(history),
  isOpen: isOpenReducer,
}, console.log("history in reducers", history))