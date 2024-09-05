import React from "react";
import profile from "../Assets/Group.svg";
import "./Setting.css";

function ChangePassword() {
  return (
    <div className="change-password-container">
      <img src={profile} alt="Profile" className="profile-image" />
      <form action="" className="password-form">
        <input
          type="password"
          id="currentPassword"
          name="currentPassword"
          placeholder="Current Password"
          required
          className="input-field"
        />
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          placeholder="New Password"
          className="input-field"
        />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="input-field"
        />
        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
