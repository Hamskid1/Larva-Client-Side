import React, { useState } from "react";
import ArrowDown from "../Assets/Vector.svg";

function DropDown() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    dropdown1: "Date Selector",
    dropdown2: "Select Course",
    dropdown3: "Select Cohort",
    dropdown4: "Bulk Action",
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
    dropdown1: ["Date 1", "Date 2", "Date 3", "Date 4"],
    dropdown2: ["Cyber Security", "Data Analysis", "Frontend Development", "Backend Development","Mobile Development","UIUX Design"],
    dropdown3: ["Cohort 1", "Cohort 2", "Cohort 3", "Cohort 4","Cohort 5","Cohort 6"],
    dropdown4: ["Mark all as present", "Mark all as Absent", "Mark all as left"],
  };

  return (
    <div className="dropdown-group">
      {["dropdown1", "dropdown2", "dropdown3", "dropdown4"].map(
        (dropdown, index) => (
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
        )
      )}
    </div>
  );
}

export default DropDown;
