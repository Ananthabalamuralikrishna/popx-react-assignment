import React from "react";
import "./WelcomePage.css";

function WelcomePage({ navigate }) {
  const handleCreateAccount = () => {
    navigate("create-account");
  };

  const handleLogin = () => {
    navigate("login");
  };

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1 className="welcome-title">
          Welcome to PopX
        </h1>

        <p className="welcome-subtitle">
          Manage your account effortlessly and stay connected with everything that matters to you.
        </p>

        <div className="welcome-buttons">
          <button
            className="btn btn-primary"
            onClick={handleCreateAccount}
          >
            Create Account
          </button>

          <button
            className="btn btn-secondary"
            onClick={handleLogin}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;