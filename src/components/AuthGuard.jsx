import { Navigate } from "react-router-dom";

const AuthGuard = (Component) => (props) => {
  if (localStorage.getItem("currentUser") != null) {
    return <Component {...props} />;
  } else {
    return <Navigate to="/" />;
  }
};

export default AuthGuard;
