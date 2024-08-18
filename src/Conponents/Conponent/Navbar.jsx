import React from "react";
import profile from "../Assets/Group.svg";
import Logo from "../Assets/Rectangle 1.svg";
import MarkAttendance from "./MarkAttendance"


function Navbar() {
 
  return (
    <div className="Navbars">
      <div className={`navbar-container`}>
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1>School Attendance</h1>
          <div className="profile-container">
            <div className="profile-info">
              <h1>Lateef AbdulHameed</h1>
              <p>Web Development</p>
            </div>
            <img src={profile} alt="Profile" className="profile-img" />
          </div>
        </nav>
      </div>
      <MarkAttendance/>
    </div>
  );
}

export default Navbar;
