import { createContext, useReducer, useEffect } from 'react'
import { useHistory } from "react-router-dom";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const history = useHistory()
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect(() => {
        let user = {};
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        const email = localStorage.getItem('email');
        const student_name = localStorage.getItem('student_name');
        const is_leader = localStorage.getItem('is_leader');
        user = { token, role, email, student_name, is_leader }
        console.log("TOKEN: ", token);
        if (token) {
            dispatch({ type: 'LOGIN', payload: user })
        } else {
            history.push("/sign-in")
        }
    }, [])

    console.log('AuthContext state: ', state)
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}