import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"; 
import Logo from "../Assets/Rectangle 1.svg";
import LogImg from "../Assets/Vector (2).svg";
import profile from "../Assets/Group.svg";


function AdminAside() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleLogout = () => {
    navigate("/"); 
  };
  
  return (
    <div>
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
           <p 
          //  onClick={}
           >Register Tutor</p>
           <p 
          //  onClick={}
           >Tutor Lists</p>
         </nav>
         <div className="sidebar-logout" onClick={handleLogout}>
           <img src={LogImg} alt="Logout Icon" />
           <h4>Log Out</h4>
         </div>
       </aside>
     </div>
    </div>
  )
}

export default AdminAside
