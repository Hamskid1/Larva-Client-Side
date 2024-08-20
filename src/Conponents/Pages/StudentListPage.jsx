import React, { useState } from "react";
import Aside from "../Conponent/Aside";
import profile from "../Assets/Group.svg";
import Logo from "../Assets/Rectangle 1.svg";
import ArrowDown from "../Assets/Vector1.svg";
import "./StudentListPage.css";

function StudentListPage() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    dropdown1: "Date Selector",
    dropdown2: "Select Course",
    dropdown3: "Select Cohort",
  });

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleOptionClick = (dropdown, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [dropdown]: option,
    }));
    setOpenDropdown(null);
  };

  const dropdownOptions = {
    dropdown1: [],
    dropdown2: [
      "Cyber Security",
      "Data Analysis",
      "Frontend Development",
      "Backend Development",
      "Mobile Development",
      "UIUX Design",
    ],
    dropdown3: [
      "Cohort 1",
      "Cohort 2",
      "Cohort 3",
      "Cohort 4",
      "Cohort 5",
      "Cohort 6",
    ],
  };

  return (
    <div className="Navbars">
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
        <div className="dropdown-group ">
          {["dropdown1", "dropdown2", "dropdown3"].map((dropdown, index) => (
            <div key={index} className="dropdown-container">
              <div
                className="dropdown-header"
                onClick={() => toggleDropdown(dropdown)}
              >
                <span>{selectedOptions[dropdown]}</span>
                <span
                  className={`dropdown-arrow ${
                    openDropdown === dropdown ? "open" : ""
                  }`}
                >
                  <img src={ArrowDown} alt="Icon" className="dropdown-icon" />
                </span>
              </div>
              {openDropdown === dropdown && (
                <ul className="dropdown-list">
                  {dropdownOptions[dropdown].map((option, idx) => (
                    <li
                      key={idx}
                      className="dropdown-item"
                      onClick={() => handleOptionClick(dropdown, option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
            <h1></h1>
        </div>
        <div>
            <h1></h1>
        </div>
        <div>
            <h1></h1>
        </div>
      </div>
    </div>
  );
}

export default StudentListPage;
