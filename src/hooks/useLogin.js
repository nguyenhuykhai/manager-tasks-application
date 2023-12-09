import { useState } from "react";
import { useHistory } from "react-router-dom";

// Import variables API
import { GET_STUDENT_BY_EMAIl, GET_LECTURER_BY_EMAIl } from "../assets/api";
import { loginSuccess, logout } from '../actions/authActions';

// Import custome hooks
import { useAlert } from "./useAlert";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { alert } = useAlert()
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
          // update the auth context
          loginSuccess(json[0])
          alert("success", "Đăng nhập thành công");
          switch (json[0]?.role) {
            case "Student":
              history.push("/profile");
              break;
            case "Lecturer":
              history.push("/profile-lecturer");
              break;
            case "Admin":
              break;  
            default:
              break;
          }
        } else {
          fakeLogin2()
        }
        setIsLoading(false);
      } catch (error) {
        fakeLogin2()
      }
    };


    const fakeLogin2 = async () => {
      try {
        const { url, options } = GET_LECTURER_BY_EMAIl(email);
        const response = await fetch(url, options);
        const json = await response.json();

        const isAuthenticated = handleLogin(json[0]);

        if (isAuthenticated) {
          // update the auth context
          loginSuccess(json[0])
          alert("success", "Đăng nhập thành công");
          switch (json[0]?.role) {
            case "Student":
              history.push("/profile");
              break;
            case "Lecturer":
              history.push("/profile-lecturer");
              break;
            case "Admin":
              break;  
            default:
              break;
          }
        } else {
          console.log("ERROR: Invalid role");
          setError("Invalid role");
          alert("error", "Đăng nhập thất bại");
        }
        setIsLoading(false);
      } catch (error) {
        console.log("ERROR: ", error);
        setIsLoading(false);
        alert("error", "Đăng nhập thất bại");
        setError(error);
      }
    };

    fakeLogin();
  };
  return { login, isLoading, error };
};

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
      break;
    case "Student":
      // Store the token in localStorage
      localStorage.setItem("id", data?.id);
      localStorage.setItem("token", data?.token);
      localStorage.setItem("role", data?.role);
      localStorage.setItem("email", data?.email);
      localStorage.setItem("name", data?.student_name);
      localStorage.setItem("is_leader", data?.is_leader);
      break;
    case "Admin":
      break;
    default:
      break;
  }
  return true;
};
