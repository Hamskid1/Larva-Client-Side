import React, { useState } from "react";
import "./Setting.css";
import arrowleft from "../Assets/Vector (6).svg";
import ChangePassword from "./ChangePassword";
import EditProfile from "./EditProfile"; 

function Setting() {
  const [showChangePassword, setShowChangePassword] = useState(false); 

  return (
    <div className="settings-container">
      <div className="settings-list">
        <div className="settings-item">
          <button 
            className="settings-button" 
            onClick={() => setShowChangePassword(false)} 
          >
            Edit Profile
          </button>
          <img src={arrowleft} alt="Arrow Left Icon" className="arrow-icon" />
        </div>
        <div className="settings-item">
          <button 
            className="settings-button" 
            onClick={() => setShowChangePassword(true)} 
          >
            Change Password
          </button>
          <img src={arrowleft} alt="Arrow Left Icon" className="arrow-icon" />
        </div>
      </div>
      {showChangePassword ? <ChangePassword /> : <EditProfile />}
    </div>
  );
}

export default Setting;





