import { createContext, useReducer, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import * as types from "../actions/actionTypes"

// Import variables API
import { GET_STUDENT_BY_EMAIl, GET_LECTURER_BY_EMAIl } from "../assets/api";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return { user: action.payload }
        case types.LOGOUT:
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

    // Function handle when first come to page
    useEffect(() => {
        const id = localStorage.getItem('id');
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        const email = localStorage.getItem('email');
        const name = localStorage.getItem('name');
        const is_leader = localStorage.getItem('is_leader');
        
        if (role == "Student") {
            fakeLogin(email)
        } else if (role == "Lecturer") {
            fakeLogin2(email)
        } else {
            history.push("/sign-in")
        }
    }, [])

    // Fake login -> wait Back-end
    const fakeLogin = async (email) => {
        try {
            const { url, options } = GET_STUDENT_BY_EMAIl(email);
            const response = await fetch(url, options);
            const json = await response.json();
            if (response.ok){
                dispatch({type: 'LOGIN_SUCCESS', payload: json[0]})
                history.push("/profile");
            } else {
                history.push("/sign-in")
            }
        } catch (error) {
            history.push("/sign-in")
        }
    };


    const fakeLogin2 = async (email) => {
        try {
            const { url, options } = GET_LECTURER_BY_EMAIl(email);
            const response = await fetch(url, options);
            const json = await response.json();
            if (response.ok) {
                dispatch({type: 'LOGIN_SUCCESS', payload: json[0]})
                history.push("/profile-lecturer");
            } else {
                history.push("/sign-in")
            }
        } catch (error) {
            history.push("/sign-in")
        }
    };

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}