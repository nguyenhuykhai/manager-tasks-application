import * as types from '../actions/actionTypes';

const initialState = {
  projects: [],
  selectedProject: null,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PROJECT_INFO:
      return { ...state, projects: action.payload };
    case types.FETCH_PROJECT_DETAIL_INFO:
      return { ...state, selectedProject: action.payload };
    case types.CREATE_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] };
    case types.UPDATE_PROJECT:
      return {
        ...state,
        selectedProject: action.payload,
        projects: state.projects.map(project => (project.project_id === action.payload.project_id ? action.payload : project)),
      };
    case types.DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(item => item.project_id !== action.payload),
      };
    default:
      return state;
  }
};

export default projectReducer;
