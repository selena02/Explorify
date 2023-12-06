import { useLocation } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import HeaderPlaceholder from "./HeaderPlaceholder";
import "../Auth.css";

function Authentication() {
  const location = useLocation();
  const isLogin = location.pathname.includes("login");

  return (
    <>
      <HeaderPlaceholder />
      <div className="auth-container">
        <div className="image-container"></div>
        {isLogin ? (
          <div className="login-container">
            <Login />
          </div>
        ) : (
          <div className="register-container">
            <Register />
          </div>
        )}
      </div>
    </>
  );
}

export default Authentication;
