import { combineReducers } from 'redux';
import {LOGOUT} from '../actions/types';
const appReducer=combineReducers({});
const rootReducer=(state,action)=>{
    if (action.type === LOGOUT) {
        state = undefined;
      }
    
      return appReducer(state, action);
}
export default rootReducer;