import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage({ navigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid =
    email.trim() !== "" && password.trim() !== "";

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(
      localStorage.getItem("userData")
    );

    if (!storedUser) {
      alert("No account found. Please create an account first.");
      return;
    }

    if (
      storedUser.email === email &&
      storedUser.password === password
    ) {
      navigate("account-settings");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <h1 className="login-title">
          Signin to your
          <br />
          PopX account
        </h1>

        <p className="login-subtitle">
          Enter your email address and password to continue.
        </p>

        <div className="form-group">
          <div className="input-wrapper">
            <label className="input-label">
              Email Address
            </label>

            <input
              type="email"
              className="input-field"
              placeholder="Enter email address"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="input-wrapper">
            <label className="input-label">
              Password
            </label>

            <input
              type="password"
              className="input-field"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>

        <button
          className={`btn-login ${
            isFormValid ? "active" : ""
          }`}
          onClick={handleLogin}
          disabled={!isFormValid}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;