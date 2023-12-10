
import { useHistory } from "react-router-dom";
import { useState } from "react";

// Import variables API
import { GET_STUDENT_BY_EMAIl, GET_LECTURER_BY_EMAIl } from "../assets/api";

// Import custome hooks
import { useAlert } from "../hooks/useAlert";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const history = useHistory()

    //   const login = async (email, password) => {
    //     setIsLoading(true);
    //     setError(null);

    //     const response = await fetch('Nhập API login', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({email, password})
    //     })
    //     const json = await response.json()

    //     if (!response.ok) {
    //         setIsLoading(false)
    //         setError(json.error)
    //     }
    //     if (response.ok) {

    //         handleLogin(response)
    //         // save the user to local storage
    //         localStorage.setItem('user', JSON.stringify(json))

    //         // update the auth context
    //         dispatch({type: 'LOGIN_SUCCESS', payload: json})

    //         setIsLoading(false)
    //     }
    //   };
    //   return { login, isLoading, error };

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);
        // Fake login -> wait Back-end
        const fakeLogin = async () => {
            try {
                const { url, options } = GET_STUDENT_BY_EMAIl(email);
                const response = await fetch(url, options);
                const json = await response.json();

                const isAuthenticated = handleLogin(json[0]);

                if (isAuthenticated) {
                    let user = {...json[0], isAuthenticated: true};
                    return user;
                } else {
                    return await fakeLogin2()
                }
                setIsLoading(false);
            } catch (error) {
                return await fakeLogin2()
            }
        };


        const fakeLogin2 = async () => {
            try {
                const { url, options } = GET_LECTURER_BY_EMAIl(email);
                const response = await fetch(url, options);
                const json = await response.json();

                const isAuthenticated = handleLogin(json[0]);

                if (isAuthenticated) {
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
    return { login, isLoading, error };
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
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('password');
    }
    return { logout }
}

// Function handle login and storage data in LocalStorage
const handleLogin = (data) => {
    // Simulate the login process and store user data in the context
    if (data?.role !== "Lecturer" && data?.role !== "Student" && data?.role !== "Admin") {
        return false;
    }
    switch (data?.role) {
        case "Lecturer":
            // Store the token in localStorage
            localStorage.setItem("id", data?.id);
            localStorage.setItem("token", data?.token);
            localStorage.setItem("role", data?.role);
            localStorage.setItem("email", data?.email);
            localStorage.setItem("name", data?.name);
            localStorage.setItem("isAuthenticated", true);
            localStorage.setItem("password", data?.password);
            break;
        case "Student":
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
        case "Admin":
            break;
        default:
            break;
    }
    return true;
};