/**
 * Created by cjpowers on 6/26/16.
 */
import * as types from './actionTypes';
import userApi from '../api/mockUserApi';

export function loadUsersSuccess(users){
  return { type: types.LOAD_USERS_SUCCESS, users }
}



export function loadUsers() {
  return function(dispatch) {
    //make actual call to server here
    return userApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    })
  }

}
