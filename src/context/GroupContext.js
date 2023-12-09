import { createContext, useReducer } from "react";
import * as types from "../actions/actionTypes"

export const GroupContext = createContext()

export const groupReducer = (state, action) => {
    switch (action.type) {
        case types.FETCH_GROUP_INFO:
            return {
                group: action.payload
            }
        case types.FETCH_GROUP_INFO:
            return {
                group: action.payload
            }
        case types.CREATE_GROUP_INFO:
            return {
                group: [action.payload, ...state.group]
            }
        case types.DELETE_GROUP_INFO:
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