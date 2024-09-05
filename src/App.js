import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Conponents/Pages/LoginPage.jsx";
import HomePage from "./Conponents/Pages/HomePage.jsx";
import RegisterStudentPage from "./Conponents/Pages/RegisterStudentPage.jsx";
import StudentListPage from "./Conponents/Pages/StudentListPage.jsx";
import SettingPage from "./Conponents/Pages/SettingPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register-students" element={<RegisterStudentPage />} />
        <Route path="/student-list" element={<StudentListPage />} />
        <Route path="/settings" element={<SettingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React from 'react'
// import "./App.css"
// import LoginPage from "./Conponents/Pages/LoginPage.jsx"






// function App() {
//   return (
//     <div>
//       <LoginPage />
//     </div>
//   )
// }


// export default App