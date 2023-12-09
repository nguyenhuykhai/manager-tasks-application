
import * as types from './actionTypes';

export const fetchGroupsSuccess = (groups) => ({
  type: types.FETCH_GROUP_INFO,
  payload: groups,
});

export const fetchGroupDetailSuccess = (group) => ({
  type: types.FETCH_GROUP_DETAIL_INFO,
  payload: group,
});
