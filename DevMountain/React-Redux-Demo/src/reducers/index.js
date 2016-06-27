/**
 * Created by cjpowers on 6/26/16.
 */
import {combineReducers} from 'redux';
import products from './productReducer';
import users from './userReducer';

const rootReducer = combineReducers({
  products, users
});

export default rootReducer;
