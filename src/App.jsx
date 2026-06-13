import React, { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import AccountSettingsPage from "./pages/AccountSettingsPage";
import "./App.css";
function App() {
  const [currentPage, setCurrentPage] = useState("welcome");

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "welcome":
        return (
          <WelcomePage navigate={navigate} />
        );

      case "login":
        return (
          <LoginPage navigate={navigate} />
        );

      case "create-account":
        return (
          <CreateAccountPage navigate={navigate} />
        );

      case "account-settings":
        return (
          <AccountSettingsPage />
        );

      default:
        return (
          <WelcomePage navigate={navigate} />
        );
    }
  };

  return (
    <div className="app-wrapper">
      <div className="phone-frame">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;