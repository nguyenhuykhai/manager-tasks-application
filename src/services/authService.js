
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

// Import variables API
import { API_GET_STUDENT_BY_EMAIl, GET_STUDENT_BY_EMAIl, GET_LECTURER_BY_EMAIl } from "../assets/api";

// Import custome hooks
import { useAlert } from "../hooks/useAlert";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const loginSendAPI = async (email, password) => {
        setIsLoading(true);
        setError(null);
    
        try {
            const response = await axios.post(API_GET_STUDENT_BY_EMAIl, {
                email,
                password
            }, {
                withCredentials: true
            });            
    
            const json = response.data;
    
            if (!response.status === "Successful") {
                setIsLoading(false);
                setError(json.error);
                return null;
            }
    
            const { isAuthen, role, token } = handleLoginAPI(json);
            if (isAuthen) {
                let user = {...json, token: token, role: role, isAuthenticated: true};
                return user;
            } else {
                setError("Account invalid");
                console.log("Account invalid");
            }
            setIsLoading(false);
            return null;
        } catch (error) {
            setIsLoading(false);
            setError("An error occurred while processing the request.");
            console.error("Error:", error);
            return null;
        }
    };

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);
        // Fake login -> wait Back-end
        const fakeLogin = async () => {
            try {
                const { url, options } = GET_STUDENT_BY_EMAIl(email);
                const response = await fetch(url, options);
                const json = await response.json();

                const { isAuthen, role, token } = handleLogin(json[0]);

                if (isAuthen) {
                    let user = {...json[0], isAuthenticated: true};
                    return user;
                } else {
                    return await fakeLogin2()
                }
            } catch (error) {
                return await fakeLogin2()
            }
        };


        const fakeLogin2 = async () => {
            try {
                const { url, options } = GET_LECTURER_BY_EMAIl(email);
                const response = await fetch(url, options);
                const json = await response.json();

                const { isAuthen, role, token } = handleLogin(json[0]);

                if (isAuthen) {
                    let user = {...json[0], isAuthenticated: true};
                    setIsLoading(false);
                    return user;
                } else {
                    console.log("ERROR: Invalid role");
                    setError("Invalid role");
                    setIsLoading(false);
                    return null;
                }
            } catch (error) {
                console.log("ERROR: ", error);
                setError(error);
                setIsLoading(false);
                return null;
            }
        };

        return await fakeLogin();
    };
    return { loginSendAPI, login, isLoading, error };
};

export const useLogout = () => {
    const logout = () => {
        // remove user from storage
        localStorage.removeItem("id");
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        localStorage.removeItem('is_leader');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('password');
    }
    return { logout }
}

// Function handle login and storage data in LocalStorage
const handleLogin = (data) => {
    // Simulate the login process and store user data in the context
    if (data?.role !== "ROLE_LECTURER" && data?.role !== "ROLE_STUDENT" && data?.role !== "ROLE_ADMIN") {
        return { isAuthen: false};
    }

    switch (data?.role) {
        case "ROLE_LECTURER":
            // Store the token in localStorage
            localStorage.setItem("id", data?.id);
            localStorage.setItem("token", data?.token);
            localStorage.setItem("role", data?.role);
            localStorage.setItem("email", data?.email);
            localStorage.setItem("name", data?.name);
            localStorage.setItem("isAuthenticated", true);
            localStorage.setItem("password", data?.password);
            break;
        case "ROLE_STUDENT":
            // Store the token in localStorage
            localStorage.setItem("id", data?.id);
            localStorage.setItem("token", data?.token);
            localStorage.setItem("role", data?.role);
            localStorage.setItem("email", data?.email);
            localStorage.setItem("name", data?.student_name);
            localStorage.setItem("is_leader", data?.is_leader);
            localStorage.setItem("isAuthenticated", true);
            localStorage.setItem("password", data?.password);
            break;
        case "ROLE_ADMIN":
            break;
        default:
            break;
    }
    return { isAuthen: true, role: data?.role, token: data?.token };
};

const handleLoginAPI = (data) => {
    let userRole;
    // Simulate the login process and store user data in the context
    if (data?.payload?.authorities) {
        const length = data?.payload?.authorities.length;
        userRole = data?.payload?.authorities[length - 1]?.authority;
    }

    if (userRole !== "ROLE_LECTURER" && userRole !== "ROLE_STUDENT" && userRole !== "ROLE_ADMIN") {
        return { isAuthen: false};
    }
    
    const token = data?.message.match(/Jwt token: (\S+)/);
    switch (userRole) {
        case "ROLE_LECTURER":
            // Store the token in localStorage
            localStorage.setItem("id", data?.id);
            localStorage.setItem("token", token[1]);
            localStorage.setItem("role", userRole);
            localStorage.setItem("email", data?.email);
            localStorage.setItem("name", data?.name);
            localStorage.setItem("isAuthenticated", true);
            break;
        case "ROLE_STUDENT":
            // Store the token in localStorage
            localStorage.setItem("id", data?.payload?.principal?.student_id);
            localStorage.setItem("token", token[1]);
            localStorage.setItem("role", userRole);
            localStorage.setItem("email", data?.payload?.principal?.email);
            localStorage.setItem("name", data?.payload?.principal?.student_name);
            localStorage.setItem("is_leader", data?.payload?.principal?._leader);
            localStorage.setItem("isAuthenticated", true);
            break;
        case "ROLE_ADMIN":
            break;
        default:
            break;
    }
    return { isAuthen: true, role: userRole, token: token[1] };
};