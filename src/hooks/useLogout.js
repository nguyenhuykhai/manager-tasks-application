// import { useAuthContext } from "./useAuthContext"
// import { useHistory } from "react-router-dom";

// export const useLogout = () => {
//     const { dispatch } = useAuthContext()
//     const history = useHistory()

//     const logout = () => {
//         // remove user from storage
//         localStorage.removeItem("id");
//         localStorage.removeItem('token');
//         localStorage.removeItem('role');
//         localStorage.removeItem('email');
//         localStorage.removeItem('name');
//         localStorage.removeItem('is_leader');

//         // dispatch logout action
//         dispatch({type: 'LOGOUT'});
//         history.push("/sign-in");
//     }
//     return {logout}
// }