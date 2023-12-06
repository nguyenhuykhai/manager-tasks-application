import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import ProfileStudent from "./pages/Student/ProfileStudent";
import ProfileLecturer from "./pages/Lecturer/ProfileLecturer";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
// import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

// Import Custome Function
// import { useAlert, showAlertDom } from './hooks/useAlert';
import withAuthProtectionStudent from "./interceptor/isAuthProtectionStudent";
import withAuthProtection from "./interceptor/isAuthenticated";

// const ProtectedComponent = withAuthProtection();
// const ProtectedStudentComponent = withAuthProtectionStudent();

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={ProfileStudent} />
          <Route exact path="/profile-lecturer" component={ProfileLecturer} />
          {/* <Redirect from="*" to="/sign-in" /> */}
        </Main>
      </Switch>
    </div>
  );
}

export default App;
