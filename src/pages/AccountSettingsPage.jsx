import React from "react";
import "./AccountSettingsPage.css";

function AccountSettingsPage() {
  const user = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className="settings-page">
      <h1 className="settings-title">
        Account Settings
      </h1>

      <div className="profile-card">
        <div className="profile-info">
          <div className="avatar-wrapper">
            <img
              src={
                user?.profileImage ||
                "https://randomuser.me/api/portraits/lego/1.jpg"
              }
              alt="Profile"
              className="avatar-img"
            />

            <div className="camera-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z" />

                <path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
              </svg>
            </div>
          </div>

          <div className="profile-text">
            <p className="profile-name">
              {user?.fullName || "User Name"}
            </p>

            <p className="profile-email">
              {user?.email || "user@example.com"}
            </p>
          </div>
        </div>

        <p className="profile-bio">
          {user?.bio || "No bio available."}
        </p>
      </div>
    </div>
  );
}

export default AccountSettingsPage;