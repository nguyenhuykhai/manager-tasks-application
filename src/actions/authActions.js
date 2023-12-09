
import * as types from './actionTypes';

export const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

export const logout = () => ({
  type: types.LOGOUT,
});
