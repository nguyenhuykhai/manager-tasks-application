import { createContext, useReducer } from "react";

export const ProjectContext = createContext()

export const projectReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PROJECT':
            return {
                project: action.payload
            }
        case 'CREATE_PROJECT':
            return {
                project: [action.payload, ...state.project]
            }
        case 'DELETE_PROJECT':
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