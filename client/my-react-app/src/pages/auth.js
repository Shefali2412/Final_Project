import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  return (
    <div className="auth auth-page">
      <Login />
      <Register />
    </div>
  );
};

const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simple validation
    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    try {
      const result = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className={`form-group ${error ? "has-error" : ""}`}>
          <label htmlFor="username">Username:</label>
          <input
            className={`form-control ${error ? "is-invalid" : ""}`}
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className={`form-group ${error ? "has-error" : ""}`}>
          <label htmlFor="password">Password:</label>
          <input
            className={`form-control ${error ? "is-invalid" : ""}`}
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="btn btn-dark" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simple validation
    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
    } catch (error) {
      console.error(error);
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        <div className={`form-group ${error ? "has-error" : ""}`}>
          <label htmlFor="username">Username:</label>
          <input
            className={`form-control ${error ? "is-invalid" : ""}`}
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className={`form-group ${error ? "has-error" : ""}`}>
          <label htmlFor="password">Password:</label>
          <input
            className={`form-control ${error ? "is-invalid" : ""}`}
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="btn btn-dark" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
