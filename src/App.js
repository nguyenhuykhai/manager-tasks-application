import { useEffect } from "react";

import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";

// Student pages
import ProfileStudent from "./pages/Student/ProfileStudent";
import HomeStudent from "./pages/Student/HomeStudent";

// Lecturer pages
import ProfileLecturer from "./pages/Lecturer/ProfileLecturer";
import HomeLecturer from "./pages/Lecturer/HomeLecturer";

// import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

import { connect } from 'react-redux';
import { Switch, Route, Redirect } from "react-router-dom";

// Import Custome Function
import PrivateRoute from "./routers/PrivateRouter"
import { useLogin } from "./services/authService"

// Import Actions
import { loginSuccess, logout } from './actions/authActions';

function App({ user, dispatch }) {
  const { login, loading, error } = useLogin();

  useEffect(async () => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        const isAuthenticated = localStorage.getItem('isAuthenticated');

        if (user == null && isAuthenticated != null) {
          // Dispatch the login action with the necessary parameters
          const userData = await login(email, password);
          dispatch(loginSuccess(userData));
        }
      } catch (error) {
        // Handle errors if needed
        console.error('Login failed:', error);
      }
    };
    fetchData();
  }, [dispatch, user]);

  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <PrivateRoute
            exact
            path="/dashboard-lecturer"
            component={HomeLecturer}
            isAuthenticated={user?.isAuthenticated}
            userRole={user?.role}
            allowedRoles={['ROLE_ADMIN', 'ROLE_LECTURER']}
            redirectTo="/sign-in"
          />
          <PrivateRoute
            exact
            path="/dashboard-student"
            component={HomeStudent}
            isAuthenticated={user?.isAuthenticated}
            userRole={user?.role}
            allowedRoles={['ROLE_STUDENT']}
            redirectTo="/sign-in"
          />
          <PrivateRoute
            exact
            path="/tables"
            component={Tables}
            isAuthenticated={user?.isAuthenticated}
            userRole={user?.role}
            allowedRoles={['ROLE_ADMIN', 'ROLE_LECTURER', 'ROLE_STUDENT']}
            redirectTo="/sign-in"
          />
          <PrivateRoute
            exact
            path="/billing"
            component={Billing}
            isAuthenticated={user?.isAuthenticated}
            userRole={user?.role}
            allowedRoles={['ROLE_ADMIN', 'ROLE_LECTURER', 'ROLE_STUDENT']}
            redirectTo="/sign-in"
          />
          <PrivateRoute
            exact
            path="/tables"
            component={Rtl}
            isAuthenticated={user?.isAuthenticated}
            userRole={user?.role}
            allowedRoles={['ROLE_ADMIN', 'ROLE_LECTURER', 'ROLE_STUDENT']}
            redirectTo="/sign-in"
          />
          <PrivateRoute
            exact
            path="/profile"
            component={ProfileStudent}
            isAuthenticated={user?.isAuthenticated}
            userRole={user?.role}
            allowedRoles={['ROLE_STUDENT']}
            redirectTo="/sign-in"
          />
          <PrivateRoute
            exact
            path="/profile-lecturer"
            component={ProfileLecturer}
            isAuthenticated={user?.isAuthenticated}
            userRole={user?.role}
            allowedRoles={['ROLE_LECTURER']}
            redirectTo="/sign-in"
          />
        </Main>
      </Switch>
      <Redirect path="*" to="/sign-in" />
    </div>
  );
}

// Connect the App component to the Redux store
const mapStateToProps = (state) => ({
  user: state.auth?.user,
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
