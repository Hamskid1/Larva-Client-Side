import React from "react";
import "./Setting.css";
import profile from "../Assets/Group.svg";

function EditProfile() {
  return (
    <div className="change-password-container">
      <img src={profile} alt="Profile" className="profile-image" />
      <form action="" className="password-form">
        <input
          type="text"
          id="newPassword"
          name="newPassword"
          placeholder="Name"
          className="input-field"
        />
        <input
          type="text"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Course"
          className="input-field"
        />
        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
