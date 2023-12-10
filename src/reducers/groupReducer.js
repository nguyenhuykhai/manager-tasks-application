import * as types from '../actions/actionTypes';

const initialState = {
  groups: [],
  selectedGroup: null,
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GROUP_INFO:
      return { ...state, groups: action.payload };
    case types.FETCH_GROUP_DETAIL_INFO:
      return { ...state, selectedGroup: action.payload };
    case types.CREATE_GROUP:
      return { ...state, groups: [...state.groups, action.payload] };
    case types.UPDATE_GROUP:
      return {
        ...state,
        selectedGroup: action.payload,
        groups: state.groups.map(group => (group.group_id === action.payload.group_id ? action.payload : group)),
      };
    case types.DELETE_GROUP:
      return {
        ...state,
        groups: state.groups.filter(item => item.group_id !== action.payload),
      };
    default:
      return state;
  }
};

export default groupReducer;
