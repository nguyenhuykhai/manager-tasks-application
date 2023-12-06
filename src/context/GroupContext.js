import { createContext, useReducer } from "react";

export const GroupContext = createContext()

export const groupReducer = (state, action) => {
    switch (action.type) {
        case 'SET_GROUP':
            return {
                group: action.payload
            }
        case 'CREATE_GROUP':
            return {
                group: [action.payload, ...state.group]
            }
        case 'DELETE_GROUP':
            return {
                group: state.group.filter((g) => g._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const GroupContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(groupReducer, {
        group: null
    })

    return (
        <GroupContext.Provider value={{...state, dispatch}}>
            { children }
        </GroupContext.Provider>
    )
}