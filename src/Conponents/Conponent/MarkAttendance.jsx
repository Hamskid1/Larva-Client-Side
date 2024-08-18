import React from "react";
import Net from "../Assets/Vector (5).svg";
import Search from "../Assets/Vector (4).svg";
import DropDown from "./DropDown";

function MarkAttendance() {
  return (
    <div className="attendance-container">
      <div className="attendance-header">
        <h1 className="attendance-title">Mark Attendance</h1>
        <div className="attendance-controls">
          <form className="attendance-form" action="">
            <img src={Search} alt="Search Icon" className="search-icon" />
            <input
              type="search"
              name="search"
              className="search-input"
              placeholder="Search student..."
            />
          </form>
          <img src={Net} alt="Network Icon" className="network-icon" />
        </div>
      </div>
      <DropDown/>
    </div>
  );
}

export default MarkAttendance;
