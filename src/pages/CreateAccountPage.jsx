import React, { useState } from "react";
import "./CreateAccountPage.css";

function CreateAccountPage({ navigate }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
    bio: "",
    profileImage: "",
  });

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "profileImage") {
      const file = files[0];

      if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
          setFormData((previousData) => ({
            ...previousData,
            profileImage: reader.result,
          }));
        };

        reader.readAsDataURL(file);
      }
    } else {
      setFormData((previousData) => ({
        ...previousData,
        [name]: value,
      }));
    }
  };

  const handleCreateAccount = () => {
    localStorage.setItem("userData", JSON.stringify(formData));

    navigate("account-settings");
  };

  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.password.trim() !== "";

  return (
    <div className="create-page">
      <div className="create-content">
        <h1 className="create-title">
          Create your
          <br />
          PopX account
        </h1>

        <div className="form-group">
          <div className="input-wrapper">
            <label className="input-label">Full Name*</label>

            <input
              type="text"
              name="fullName"
              className="input-field"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-wrapper">
            <label className="input-label">Phone Number*</label>

            <input
              type="tel"
              name="phone"
              className="input-field"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-wrapper">
            <label className="input-label">Email Address*</label>

            <input
              type="email"
              name="email"
              className="input-field"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-wrapper">
            <label className="input-label">Password*</label>

            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-wrapper">
            <label className="input-label">Company Name</label>

            <input
              type="text"
              name="company"
              className="input-field"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-wrapper">
            <label className="input-label">Bio</label>

            <textarea
              name="bio"
              className="input-field bio-field"
              placeholder="Tell us about yourself"
              value={formData.bio}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-wrapper">
            <label className="input-label">Profile Image</label>

            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleInputChange}
            />
          </div>

          <div className="radio-group">
            <p className="radio-label">
              Are you an Agency?
              <span className="required-star">*</span>
            </p>

            <div className="radio-options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={handleInputChange}
                />

                <span className="radio-custom"></span>

                <span className="radio-text">Yes</span>
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={handleInputChange}
                />

                <span className="radio-custom"></span>

                <span className="radio-text">No</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="create-footer">
        <button
          className="btn-create"
          onClick={handleCreateAccount}
          disabled={!isFormValid}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default CreateAccountPage;