import * as types from '../actions/actionTypes';

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case types.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default authReducer;
