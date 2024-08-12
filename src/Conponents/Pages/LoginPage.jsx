import React from "react";
import Logo from "../Assets/Rectangle 1.svg";
import MailLogo from "../Assets/Vector.svg";
import PasswordLogo from "../Assets/Vector (1).svg";
import LoginBk from "../Assets/Rectangle 2.svg";


function LoginPage() {
  return (
    <div className="login-page">
      <div className="input-sections">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>Login into your Account</h1>
        <form>
          <div className="inputs inputs-email">
            <img src={MailLogo} alt="MailLogo" className="input-icon" />
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="inputs inputs-password">
            <img src={PasswordLogo} alt="PasswordLogo" className="input-icon" />
            <input type="password" name="password" placeholder="Password" />
          </div>
        </form>
        <button className="button button-tutor">Log In As Tutor</button>
        <button className="button button-admin">Log In As Super Admin</button>
      </div>
      <img src={LoginBk} alt="" className="login-bk" />
    </div>
  );
}

export default LoginPage;
