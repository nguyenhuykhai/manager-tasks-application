import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useHistory } from "react-router-dom";

// Import variables API
import { GET_STUDENT_BY_EMAIl } from "../assets/api";

// Import custome hooks
import { useAlert } from "./useAlert";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { alert } = useAlert()
  const { dispatch } = useAuthContext();
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
  //         dispatch({type: 'LOGIN', payload: json})

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
          dispatch({ type: "LOGIN", payload: json[0] });
          alert("success", "Đăng nhập thành công");
          history.push("/profile");
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

  // Store the token in localStorage
  const token = "exampleToken";
  localStorage.setItem("token", data?.token);
  localStorage.setItem("role", data?.role);
  localStorage.setItem("email", data?.email);
  localStorage.setItem("student_name", data?.student_name);
  localStorage.setItem("is_leader", data?.is_leader);
  return true;
};
