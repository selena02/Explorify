import { FormEvent } from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../Form.css";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validateConfirmPassword = (): boolean => {
    setError("");
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return false;
      }
    }
    return true;
  };

  const isPasswordValid = (password: string) => {
    setError("");

    if (!/(?=.*[a-z])/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return false;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return false;
    } else if (!/(?=.*\d)/.test(password)) {
      setError("Password must contain at least one digit.");
      return false;
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError(
        "Password must contain at least one special character (!@#$%^&*)."
      );
      return false;
    } else if (password.length < 6) {
      setError("Password must be at least six characters long");
      return false;
    }
    return true;
  };

  const isEmailValid = (email: string): boolean => {
    setError("");

    if (!/@/.test(email)) {
      setError("Email must contain '@'.");
      return false;
    }
    const domainPart = email.substring(email.indexOf("@") + 1);
    if (domainPart.length === 0 || !/\./.test(domainPart)) {
      setError("Email must contain a domain after '@'.");
      return false;
    }
    return true;
  };

  const register = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (
      !validateConfirmPassword() ||
      !isPasswordValid(password) ||
      !isEmailValid(email)
    ) {
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setError(err.message.replace(/firebase:/i, ""));
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Register</h1>
      {error && <div className="auth-error">{error}</div>}
      <form onSubmit={register} name="register-form">
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
              isEmailValid(email);
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
              validateConfirmPassword();
              isPasswordValid(password);
            }}
          />
          <input
            className="form-input"
            autoComplete="new-password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
            placeholder="Confirm password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              validateConfirmPassword();
            }}
          />
          <button className="register-login-button" type="submit">
            <span>Register</span>
          </button>
          <p className="reddirect">
            Already a member? <Link to="/authentication/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
