import React, { useState } from "react";
import Logo from "../Assets/Rectangle 1.svg";
import LogImg from "../Assets/Vector (2).svg";
import profile from "../Assets/Group.svg"

function Aside() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="aside">
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <aside className={`sidebar ${isOpen ? "show" : ""}`}>
        <div className="profile-container">
          <img src={profile} alt="Profile" className="profile-img" />
          <div className="profile-info">
            <h1>Lateef AbdulHameed</h1>
            <p>Web Development</p>
          </div>
        </div>
        <img src={Logo} alt="Logo" className="sidebar-logo" />
        <nav className="sidebar-nav">
          <p>Mark Attendance</p>
          <p>Register Students</p>
          <p>Students List</p>
          <p>Settings</p>
        </nav>
        <div className="sidebar-logout">
          <img src={LogImg} alt="Logout Icon" />
          <h4>Log Out</h4>
        </div>
      </aside>
    </div>
  );
}

export default Aside;
