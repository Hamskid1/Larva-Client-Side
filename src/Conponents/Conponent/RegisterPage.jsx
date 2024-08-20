import React from 'react';
import Profile from "../Assets/Group.svg";
import './RegisterPage.css';
function RegisterPage() {
  return (
    <div className="register-page">
      <h1 className="register-title">Register Student</h1>
      <form className="register-form" action="">
        <div className="profile-photo">
          <img src={Profile} alt="Profile" className="profiles-img"/>
          <h3 className="add-photo-text">Add Photo</h3>
        </div>
        <input type="text" placeholder="Name" className="form-input"/>
        <input type="number" placeholder="Student Number" className="form-input"/>
        <input type="text" placeholder="Course" className="form-input"/>
        <input type="text" placeholder="Cohort" className="form-input"/>
        <input type="submit" value="Register Student" className="submit-btn"/>
      </form>
    </div>
  )
}

export default RegisterPage;
