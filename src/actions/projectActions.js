
import * as types from './actionTypes';

export const fetchProjectsSuccess = (projects) => ({
  type: types.FETCH_PROJECT_INFO,
  payload: projects,
});

export const fetchProjectDetailSuccess = (project) => ({
  type: types.FETCH_PROJECT_DETAIL_INFO,
  payload: project,
});
