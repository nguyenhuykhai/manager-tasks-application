import { createContext, useReducer } from "react";
import * as types from "../actions/actionTypes"

export const ProjectContext = createContext()

export const projectReducer = (state, action) => {
    switch (action.type) {
        case types.FETCH_PROJECT_INFO:
            return {
                project: action.payload
            }
        case types.CREATE_PROJECT_INFO_INFO:
            return {
                project: [action.payload, ...state.project]
            }
        case types.DELETE_PROJECT_INFO_INFO:
            return {
                project: state.project.filter((p) => p._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const ProjectContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(projectReducer, {
        project: null
    })

    return (
        <ProjectContext.Provider value={{...state, dispatch}}>
            { children }
        </ProjectContext.Provider>
    )
}