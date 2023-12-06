import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (err: any) {
      setError(err.message.replace(/firebase:/i, ""));
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Login</h1>
      {error && <div className="auth-error">{error}</div>}
      <form onSubmit={login} name="register-form">
        <div className="input-container">
          <input
            autoComplete="new-password"
            className="form-input"
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="form-input"
            autoComplete="new-password"
            name="password"
            type="password"
            value={password}
            required
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="register-login-button" type="submit">
            <span>Login</span>
          </button>
          <p className="reddirect">
            Not a member yet?{" "}
            <Link to="/authentication/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
