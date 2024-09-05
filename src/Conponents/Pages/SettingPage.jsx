import React from "react";
import Aside from "../Conponent/Aside";
import profile from "../Assets/Group.svg";
import Logo from "../Assets/Rectangle 1.svg";
import Setting from "../Conponent/Setting";

function SettingPage() {
  return (
    <div>
      <Aside />
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
        <h1 className="settingTitle">Settings</h1>
        <Setting/>
      </div>
    </div>
  );
}

export default SettingPage;
