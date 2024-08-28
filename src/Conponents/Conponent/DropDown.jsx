import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ArrowDown from "../Assets/Vector1.svg";

function DropDown() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    dropdown1: "Date Selector",
    dropdown2: "Select Course",
    dropdown3: "Select Cohort",
    dropdown4: "Bulk Action",
  });
  const [selectedDate, setSelectedDate] = useState(null);

  const dropdownRef = useRef(null);

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

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedOptions((prev) => ({
      ...prev,
      dropdown1: date ? date.toLocaleDateString() : "Date Selector",
    }));
    setOpenDropdown(null);
  };

  const dropdownOptions = {
    dropdown2: [
      "Cyber Security",
      "Data Analysis",
      "Frontend Development",
      "Backend Development",
      "Mobile Development",
      "UI/UX Design",
    ],
    dropdown3: [
      "Cohort 1",
      "Cohort 2",
      "Cohort 3",
      "Cohort 4",
      "Cohort 5",
      "Cohort 6",
    ],
    dropdown4: [
      "Mark all as present",
      "Mark all as Absent",
      "Mark all as left",
    ],
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-group" ref={dropdownRef}>
      <div className="dropdown-container">
        <div
          className="dropdown-header"
          onClick={() => toggleDropdown("dropdown1")}
        >
          <span>{selectedOptions.dropdown1}</span>
          <span
            className={`dropdown-arrow ${
              openDropdown === "dropdown1" ? "open" : ""
            }`}
          >
            <img src={ArrowDown} alt="Icon" className="dropdown-icon" />
          </span>
        </div>
        {openDropdown === "dropdown1" && (
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
          />
        )}
      </div>

      {["dropdown2", "dropdown3", "dropdown4"].map((dropdown, index) => (
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
  );
}

export default DropDown;
