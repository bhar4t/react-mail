import { combineReducers } from 'redux';
import mainReducers from './mainReducer';
const combinedReducers = combineReducers({ mainReducers });
export default combinedReducers;